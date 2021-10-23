const { post, challenge, challengelike } = require("../../models");
module.exports = {
  getMyList: (req, res) => {
    //res.send('getMyList 테스트 성공');
    const { userId } = req.params;
    if (!userId) {
      res.status(400).send({
        data: null,
        message: "Bad Request",
      });
    } else {
      //포스팅 중에 user_id가 userId인 포스팅을 다 가져오기
      const postList = await post.findAll({ where: { user_id: userId } });
      /**SELECT name,img,level FROM challenge INNER JOIN challengelike ON
       * challenge.id = challengelike.challenge_id
       * WHERE challengelike.user_id = userId
       */
      //sequelize에서 inner join하는 방법 정확하지 않아 나중에 테스트 해봐야함.
      const challengeList = await challenge.findAll({
        include: [
          {
            model: challengelike,
            where: { user_id: userId },
          },
        ],
      });
      res
        .status(200)
        .send({ data: { postList, challengeList }, message: "ok" });
    }
  },
  deletePost: (req, res) => {
    res.send("deletePost 테스트 성공");
  },
};
