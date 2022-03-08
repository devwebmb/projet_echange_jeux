const { Announcement } = require("../database/sequelize");
const fs = require("fs");

exports.getAllAnnouncements = (req, res, next) => {
  Announcement.findAll()
    .then((announcements) => {
      const message = "voici toutes les annonces.";
      res.status(200).json({ message, data: announcements });
    })
    .catch((error) => {
      const message =
        "La récupération de toutes les annonces a échoué, veuillez réessayer dans quelques instants.";
      return res.status(500).json({ message, data: error });
    });
  console.log("test");
};

exports.getOneAnnouncement = (req, res, next) => {
  Announcement.findByPk(req.params.id)
    .then((annoucement) => {
      if (annoucement === null) {
        const message =
          "L'annonce demandée  n'existe pas. Réessayer avec un autre identifiant de post.";
        return res.status(404).json({ message });
      }
      const message = "Voici l'annonce demandée.";
      res.status(200).json({ message, data: annoucement });
    })
    .catch((error) => {
      const message =
        "La récupération de l'annonce a échoué veuillez réessayer dans quelques instants.";
      res.status(500).json({ message });
    });
};

exports.addAnnouncement = (req, res, next) => {
  const post = req.body.post;
  const author = req.body.author;
  const title = req.body.title;
  const posterId = req.body.posterId;
  if (req.file) {
    const file = `${req.file.filename}`;
    Announcement.create({
      title: title,
      author: author,
      post: post,
      posterId: posterId,
      imgUrl: `${req.protocol}://${req.get("host")}/images/${file}`,
    })
      .then((announcement) => {
        const message = " Votre annonce a été créée.";
        return res.status(201).json({ message, data: announcement });
      })
      .catch((error) => {
        const message =
          "L'ajout de l'annonce a échoué, veuillez réessayer dans quelques instants.";
        return res.status(500).json({ message, data: error });
      });
  } else {
    Announcement.create({
      title: title,
      author: author,
      post: post,
      posterId: posterId,
    })
      .then((announcement) => {
        const message = " Votre annonce a été créée.";
        return res.status(201).json({ message, data: announcement });
      })
      .catch((error) => {
        const message =
          "L'ajout de l'annonce a échoué, veuillez réessayer dans quelques instants.";
        return res.status(500).json({ message, data: error });
      });
  }
};

exports.deleteAnnouncement = (req, res, next) => {
  Announcement.findByPk(req.params.id).then((announcement) => {
    if (announcement.imgUrl) {
      const filename = post.imgUrl.split("/images")[1];
      fs.unlink(`images/${filename}`, () => {
        announcement
          .destroy()
          .then(() => {
            const message = "Le post a bien été supprimé.";
            return res.status(200).json({ message });
          })
          .catch((error) => {
            const message =
              "La suppression du post a échoué, veuillez réessayer dans quelques instants.";
            return res.status(500).json({ message, data: error });
          });
      });
    } else {
      announcement
        .destroy()
        .then(() => {
          const message = "Le post a bien été supprimé.";
          return res.status(200).json({ message });
        })
        .catch((error) => {
          const message =
            "La suppression du post a échoué, veuillez réessayer dans quelques instants.";
          return res.status(500).json({ message, data: error });
        });
    }
  });
};
