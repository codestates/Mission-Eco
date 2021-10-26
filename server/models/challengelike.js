"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class challengelike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.challengelike.belongsTo(models.user, { foreignKey: "user_id" });
      models.challengelike.belongsTo(models.challenge, {
        foreignKey: "challenge_id",
      });
    }
  }
  challengelike.init(
    {
      user_id: DataTypes.INTEGER,
      challenge_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "challengelike",
      timestamps: false,
    }
  );
  return challengelike;
};
