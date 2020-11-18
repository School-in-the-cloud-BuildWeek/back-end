module.exports = {
  roleChecker,
};

function roleChecker() {
  return function (req, res, next) {
    if (req.decodedJwt.role === 1 || req.decodedJwt.role === 3) {
      next();
    } else {
      res.status(401).json({ message: "Not authorized" });
    }
  };
}
