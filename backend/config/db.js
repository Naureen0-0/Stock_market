const mongoose = require("mongoose");

async function connectDB() {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in the environment.");
  }

  await mongoose.connect(mongoUrl);
  console.log("Connected to MongoDB");
}

module.exports = connectDB;
