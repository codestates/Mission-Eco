"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userbadge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userbadge.belongsTo(models.user, { foreignKey: "user_id" });
    }
  }
  userbadge.init(
    {
      user_id: DataTypes.INTEGER,
      badge_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userbadge",
      timestamps: false,
    }
  );
  return userbadge;
};
