module.exports = {
  validateUserInputs,
};

function validateUserInputs(req, res, next) {
  const user = req.body;

  if (
    user.name &&
    user.email &&
    user.password &&
    user.confirmPassword &&
    typeof user.password === "string"
  ) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "Please provide valid credentials for this user" });
  }
}
