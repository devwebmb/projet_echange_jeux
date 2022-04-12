const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/sequelize");
const userRoutes = require("./routes/user");
const announcementRoutes = require("./routes/announcement");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

sequelize.initDb();

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/user", userRoutes);
app.use("/api/announcement", announcementRoutes);

module.exports = app;
