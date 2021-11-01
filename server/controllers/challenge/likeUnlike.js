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
        await challengelike.create({
          user_id: id,
          challenge_id: challengeId,
        });
        const challengeList = await challenge.findAll({
          include: [
            {
              attributes: ["user_id", "challenge_id"],
              model: challengelike,
              as: "challengelikes",
            },
          ],
        });
        return res.status(201).send({ challengeList });
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
        if (!findUserLike) return res.status(400).send("no user");
        //좋아요 삭제
        await findUserLike.destroy();
        const challengeList = await challenge.findAll({
          include: [
            {
              attributes: ["user_id", "challenge_id"],
              model: challengelike,
              as: "challengelikes",
            },
          ],
        });
        return res.status(200).send({ challengeList });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
