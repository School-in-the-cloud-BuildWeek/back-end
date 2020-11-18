const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "Keep it secret, keep it safe!";

module.exports = {
  makeToken,
};

function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "30 seconds",
  };
  return jwt.sign(payload, jwtSecret, options);
}
