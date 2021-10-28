const { challenge, challengelike } = require("../../models");
module.exports = async (req, res) => {
  //res.send('showAllLevel 테스트 성공'); qeury 가져오기
  console.log("req--", req);
  try {
    //챌린지의 리스트를 전체를 보내주기
    const challengeList = await challenge.findAll({
      include: [
        {
          model: challengelike,
        },
      ],
    });
    res.status(200).send({ challengeList });
  } catch (error) {
    console.log(error);
  }
};
