const { user, badge, userbadge, challenge } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");
module.exports = {
  badgeList: async (req, res) => {
    //res.send("Badge 전체 리스트 불러오기");
    //뱃지 모델에서 전체 뱃지 리스트 가져오기
    try {
      const badgeList = await badge.findAll();
      res.status(200).send({ badgeList });
    } catch (error) {
      console.log(error);
    }
  },
  post: async (req, res) => {
    //res.send("뱃지 획득시");
    //뱃지 획득시 유저뱃지 모델에 해당하는 유저와 해당하는 챌린지 아이디의 값과 일치하는 뱃지를
    //뱃지를 찾아 연결 시켜줌 challengetry
    try {
      const accessTokenData = isAuthorized(req);
      //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
      if (!accessTokenData) {
        res.sendStatus(401);
      } else {
        const { id } = accessTokenData; //userId값 받아오기
        const { challengeId } = req.body;
        const findBadge = await badge.findOne({
          where: { challenge_id: challengeId },
        });
        if (!findBadge) {
          return res.sendStatus(400);
        } else {
          await userbadge.create({
            user_id: id,
            badge_id: findBadge.dataValues.id,
          });
          return res.sendStatus(201);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  myBadgeList: async (req, res) => {
    //res.send("획득한 뱃지 리스트");
    //해당 유저가 가지고 있는 뱃지만 리턴
    try {
      const accessTokenData = isAuthorized(req);
      //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
      if (!accessTokenData) {
        res.sendStatus(401);
      } else {
        const { id } = accessTokenData; //userId값 받아오기
        const myBadge = await userbadge.findAll({
          where: { user_id: id },
        });
        res.status(200).send({ myBadge });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
