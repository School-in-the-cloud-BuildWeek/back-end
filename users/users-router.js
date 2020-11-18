const express = require("express");

const Users = require("./users-model");

const { restricted } = require("../middleware/restricted-middleware");

const { roleChecker } = require("../middleware/role-checker");

const router = express.Router();

router.get("/volunteers", restricted, (req, res) => {
  Users.findVolunteers(3)
    .then((users) => {
      res.status(200).json({ data: { volunteers: users } });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/students", restricted, roleChecker(), (req, res) => {
  Users.findStudents(2)
    .then((users) => {
      res.status(200).json({ data: { students: users } });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
