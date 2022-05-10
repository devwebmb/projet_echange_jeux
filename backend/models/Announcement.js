module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    annonce: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl1: {
      type: DataTypes.STRING,
    },
    imgUrl2: {
      type: DataTypes.STRING,
    },
    imgUrl3: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
