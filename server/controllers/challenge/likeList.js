const { challengelike } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");
const sequelize = require("sequelize");
module.exports = {
  likeList: async (req, res) => {
    try {
      const likeCount = await challengelike.findAll({
        group: ["challenge_id"],
        attributes: [
          "challenge_id",
          [sequelize.fn("COUNT", "challenge_id"), "likeCount"],
        ],
      });
      return res.status(200).send({ likeCount });
    } catch (error) {
      console.log(error);
    }
  },
  userLike: async (req, res) => {
    try {
      const accessTokenData = isAuthorized(req);
      //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
      if (!accessTokenData) {
        return res.sendStatus(401);
      } else {
        const { id } = accessTokenData;
        const mylikeList = await challengelike.findAll({
          where: { user_id: id },
        });
        return res.status(200).send({ mylikeList });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
