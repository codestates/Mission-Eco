const { user, challenge, challengelike } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");
module.exports = {
  like: async (req, res) => {
    try {
      const accessTokenData = isAuthorized(req);
      //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
      if (!accessTokenData) {
        return res.sendStatus(401);
      } else {
        const { id } = accessTokenData;
        const { challengeId } = req.body;
        if (!challengeId) {
          return res.sendStatus(400);
        }
        const userChLike = await challengelike.create({
          user_id: id,
          challenge_id: challengeId,
        });
        const userLikeList = await challengelike.findAll({
          where: { user_id: id },
        });
        return res.status(201).send({ userLikeList });
      }
    } catch (error) {
      console.log(error);
    }
  },
  unLike: async (req, res) => {
    try {
      const accessTokenData = isAuthorized(req);
      //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
      if (!accessTokenData) {
        return res.sendStatus(401);
      } else {
        const { id } = accessTokenData;
        const { challengeId } = req.body;
        if (!challengeId) {
          return res.sendStatus(400);
        }
        const findUserLike = await challengelike.findOne({
          where: { user_id: id, challenge_id: challengeId },
        });
        if (!findUserLike) return res.sendStatus(400);
        //좋아요 삭제
        await findUserLike.destroy();
        const userLikeList = await challengelike.findAll({
          where: { user_id: id },
        });
        return res.status(200).send({ userLikeList });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
