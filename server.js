const express = require("express");
const knex = require("knex");

const cohortRouter = require("./Routers/cohortRouter");
const studentRouter = require("./Routers/studentRouter");

const server = express();

server.use(express.json());

server.use("/api/cohorts", cohortRouter);
server.use("/api/students", studentRouter);

module.exports = server;
