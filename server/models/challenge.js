"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.challenge.hasMany(models.post, { foreignKey: "challenge_id" });
      models.challenge.hasMany(models.challengelike, {
        foreignKey: "challenge_id",
      });
    }
  }
  challenge.init(
    {
      img: DataTypes.STRING,
      name: DataTypes.STRING,
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "challenge",
    }
  );
  return challenge;
};