const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel.js");
const { getJwtSecret } = require("../middleware/authMiddleware.js");

function generateToken(userId) {
  return jwt.sign({ id: userId }, getJwtSecret(), { expiresIn: "7d" });
}

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide name, email, and password." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await UserModel.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists with this email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully. Please log in.",
    });
  } catch (error) {
    console.error("Signup failed:", error.message);
    return res.status(500).json({ message: "Server error during signup." });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password." });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await UserModel.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    return res.status(200).json({
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login failed:", error.message);
    return res.status(500).json({ message: "Server error during login." });
  }
}

module.exports = { signup, login };
