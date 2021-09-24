const express = require("express");
const logger = require("morgan");
const xssClean = require("xss-clean");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xssClean());
app.use(helmet());

// TODO: Add general limiter
// TODO: Add allow origin and another restriction + cors

app.use(routes);

module.exports = app;
