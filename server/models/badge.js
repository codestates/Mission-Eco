"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class badge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.badge.hasMany(models.userbadge, {
        foreignKey: "badge_id",
      });
      models.badge.belongsTo(models.challenge, { foreignKey: "challenge_id" });
    }
  }
  badge.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      challenge_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "badge",
    }
  );
  return badge;
};
