const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const UserModel = require("../models/User");
const AnnouncementModel = require("../models/Announcement");

const dataBase = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: "mariadb",
    dialectOptions: {
      timezone: "Etc/GMT-2",
    },
    login: false,
  }
);

dataBase
  .authenticate()
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch((error) =>
    console.log("Impossible de se connecter à la base de données")
  );

const User = UserModel(dataBase, DataTypes);
const Announcement = AnnouncementModel(dataBase, DataTypes);

const initDb = () => {
  return dataBase
    .sync({ force: true })
    .then(() => console.log("La base de données est initialisée."));
};

module.exports = { initDb, User, Announcement };
