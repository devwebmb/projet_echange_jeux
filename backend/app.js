const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/sequelize");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());

sequelize.initDb();

app.use("/api/user", userRoutes);

module.exports = app;
