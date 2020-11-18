const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const trainingsRouter = require("../trainings/trainings-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/trainings", trainingsRouter);

const message = process.env.MESSAGE || "Hello from the API";

server.get("/", (req, res) => {
  res.send(message);
});

module.exports = server;
