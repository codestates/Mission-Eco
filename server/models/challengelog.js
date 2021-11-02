"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class challengelog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.challengelog.belongsTo(models.user, { foreignKey: "user_id" });
      models.challengelog.belongsTo(models.challenge, {
        foreignKey: "challenge_id",
      });
    }
  }
  challengelog.init(
    {
      img: DataTypes.STRING,
      challengelog_contents: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "challengelog",
    }
  );
  return challengelog;
};
