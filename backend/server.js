require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { getJwtSecret, requireAuth } = require("./middleware/authMiddleware");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const { VisitorModel } = require("./model/VisitorModel");

const app = express();
const PORT = process.env.PORT || 5000;

function getAllowedOrigins() {
  const configuredOrigins = (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (configuredOrigins.length > 0) {
    return configuredOrigins;
  }

  return ["http://localhost:3000"];
}

const allowedOrigins = getAllowedOrigins();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS."));
    },
  })
);


app.use(express.json());

//ADD THIS HEALTH CHECK ROUTE
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running.");
});

const VISITOR_COUNTER_KEY = "site-visits";

app.get("/api/visitors", async (req, res) => {
  try {
    const visitorCounter = await VisitorModel.findOneAndUpdate(
      { key: VISITOR_COUNTER_KEY },
      { $setOnInsert: { key: VISITOR_COUNTER_KEY, count: 0 } },
      { returnDocument: "after", upsert: true }
    );

    res.status(200).json({ count: visitorCounter.count });
  } catch (error) {
    console.error("Failed to fetch visitor count:", error.message);
    res.status(500).json({ message: "Failed to fetch visitor count." });
  }
});

app.post("/api/visitors", async (req, res) => {
  try {
    const visitorCounter = await VisitorModel.findOneAndUpdate(
      { key: VISITOR_COUNTER_KEY },
      {
        $setOnInsert: { key: VISITOR_COUNTER_KEY },
        $inc: { count: 1 },
      },
      { returnDocument: "after", upsert: true }
    );

    res.status(200).json({ count: visitorCounter.count });
  } catch (error) {
    console.error("Failed to update visitor count:", error.message);
    res.status(500).json({ message: "Failed to update visitor count." });
  }
});

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Failed to fetch holdings:", error.message);
    res.status(500).json({ message: "Failed to fetch holdings." });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Failed to fetch positions:", error.message);
    res.status(500).json({ message: "Failed to fetch positions." });
  }
});

function validateOrderPayload(payload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const qty = Number(payload.qty);
  const price = Number(payload.price);
  const mode = typeof payload.mode === "string" ? payload.mode.trim().toUpperCase() : "";

  if (!name) {
    return { message: "Order name is required." };
  }

  if (!Number.isInteger(qty) || qty < 1) {
    return { message: "Quantity must be a whole number greater than 0." };
  }

  if (!Number.isFinite(price) || price <= 0) {
    return { message: "Price must be a number greater than 0." };
  }

  if (!["BUY", "SELL"].includes(mode)) {
    return { message: "Order mode must be BUY or SELL." };
  }

  return {
    value: {
      name,
      qty,
      price,
      mode,
    },
  };
}

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const validationResult = validateOrderPayload(req.body);

    if (!validationResult.value) {
      return res.status(400).json({ message: validationResult.message });
    }

    const { name, qty, price, mode } = validationResult.value;

    const newOrder = new OrdersModel({
      userId: req.user.id,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully." });
  } catch (error) {
    console.error("Failed to create order:", error.message);
    res.status(500).json({ message: "Failed to create order." });
  }
});

// ========== NEW: GET ORDERS ROUTES ==========

// Get orders for the logged-in user
app.get("/allOrders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id }).sort({ 
      createdAt: -1 
    });
    console.log(`📦 Found ${orders.length} orders for user`);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error.message);
    res.status(500).json({ message: "Failed to fetch orders." });
  }
});

// Get all orders (for testing - keep requireAuth for security)
app.get("/api/orders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ createdAt: -1 });
    console.log(`📦 Found ${orders.length} total orders`);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error.message);
    res.status(500).json({ message: "Failed to fetch orders." });
  }
});

async function startServer() {
  try {
    getJwtSecret();
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();