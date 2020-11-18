const express = require("express");

const Trainings = require("../trainings/trainings-model");

const { restricted } = require("../middleware/restricted-middleware");

const { roleChecker } = require("../middleware/role-checker");

const router = express();

router.post("/", restricted, roleChecker(), (req, res) => {
  const training = req.body;

  Trainings.add(training)
    .then((training) => {
      res.status(201).json({ data: training });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", restricted, roleChecker(), (req, res) => {
  Trainings.find()
    .then((trainings) => {
      res.status(200).json({ data: trainings });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", restricted, roleChecker(), (req, res) => {
  const { id } = req.params;

  Trainings.findBy({ id: id })
    .then((training) => {
      res.status(200).json({ data: training });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
