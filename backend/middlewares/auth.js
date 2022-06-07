const jwt = require("jsonwebtoken");
require("dotenv").config();

// middleware d'authentification venant récupérer le jeton de l'utilisateur s'il en a un et le vérifier avec la clé d'encodage
// Ce middleware est présent sur les routes de requêtes posts et comments
module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const message =
      "Veuillez vous connecter pour obtenir un jeton d'authentification.";
    return res.status(401).json({ message });
  }

  const token = authorizationHeader.split(" ")[1];
  const decodedToken = jwt.verify(
    token,
    `${process.env.PRIVATE_KEY}`,
    (error, decodedToken) => {
      if (error) {
        const message =
          "L'utilisateur n'est pas autorisé à accéder à cette ressource";
        return res.status(403).json({ message, data: error });
      }

      const userId = decodedToken.userId;
      req.userId = userId;
      if (req.body.userId && req.body.userId !== userId) {
        const message = "L'identifiant de l'utilisateur est invalide";
        res.status(401).json({ message });
      } else {
        next();
      }
    }
  );
};
