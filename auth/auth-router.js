const express = require("express");

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model");

const { validateUserInputs } = require("../middleware/validate-user-inputs");

const { makeToken } = require("./make-token");

const router = express.Router();

router.post("/register", validateUserInputs, (req, res) => {
  const credentials = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 10;
  const hash = bcrypt.hashSync(credentials.password, rounds);

  credentials.password = hash;

  Users.add(credentials)
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findBy({ email: email })
    .then((users) => {
      const user = users[0];

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user);

        res.status(200).json({
          message: `Welcome back ${user.name}`,
          role: user.role,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
