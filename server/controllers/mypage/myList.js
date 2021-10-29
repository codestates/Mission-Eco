const { challengelog, challenge, challengelike } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");
module.exports = {
  getMyList: async (req, res) => {
    //포스팅 중에 user_id가 userId인 포스팅을 다 가져오기
    const accessTokenData = isAuthorized(req);
    //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
    if (!accessTokenData) {
      return res.sendStatus(401);
    } else {
      const { id } = accessTokenData;

      const myLogList = await challengelog.findAll({
        where: { user_id: id },
      });
      /**SELECT name,img,level FROM challenge INNER JOIN challengelike ON
       * challenge.id = challengelike.challenge_id
       * WHERE challengelike.user_id = userId
       */
      //sequelize에서 inner join하는 방법 정확하지 않아 나중에 테스트 해봐야함.
      const challengeList = await challenge.findAll({
        include: [
          {
            model: challengelike,
            attribute: [],
            where: { user_id: id },
          },
        ],
      });
      res.status(200).send({ myLogList, challengeList });
    }
  },
};
