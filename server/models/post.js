"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post.belongsTo(models.user, { foreignKey: "user_id" });
      models.post.belongsTo(models.challenge, { foreignKey: "challenge_id" });
    }
  }
  post.init(
    {
      img: DataTypes.STRING,
      post_contents: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
