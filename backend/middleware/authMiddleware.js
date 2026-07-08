const jwt = require("jsonwebtoken");

function getJwtSecret() {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in the environment.");
  }

  return jwtSecret;
}

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token is required." });
  }

  const token = authHeader.slice(7).trim();

  try {
    const decodedToken = jwt.verify(token, getJwtSecret());
    req.user = { id: decodedToken.id };
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

module.exports = { getJwtSecret, requireAuth };
