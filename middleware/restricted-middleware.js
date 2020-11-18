const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "Keep it secret, keep it safe!";

module.exports = {
  restricted,
};

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Please supply the token" });
  } else if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Bad token" });
      }
      req.decodedJwt = decoded;
      next();
    });
  }
}
