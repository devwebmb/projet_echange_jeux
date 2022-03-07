const bcrypt = require("bcrypt");
const { User } = require("../database/sequelize");

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password).then((hash) => {
    User.create({
      email: req.body.email,
      pseudo: req.body.pseudo,
      password: req.body.password,
    })
      .then((user) => {
        const message = `L'utilisateur ${req.body.pseudo} a été créé.`;
        res.status(201).json({ message, data: user });
      })
      .catch((error) => {
        const message =
          "L'utilisateur n'a pas pu être créé, veuillez rééssayer dans un instant.";
        return res.status(500).json({ message, data: error });
      });
  });
};

exports.login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        const message = "L'utilisateur n'éxiste pas.";
        return res.status(404).json({ message });
      }
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          const message = "Le mot de passe est incorrect.";
          res.status(401).json({ message });
        }
        const message = "L'utilisateur a été connecté avecc succès";
        return res.status(200).json({ message, data: user });
      });
    })
    .catch((error) => {
      "L'utilisateur n'a pas pu être connecté, réessayez dans un instant.";
      return res.status(500).json({ message, data: error });
    });
};
