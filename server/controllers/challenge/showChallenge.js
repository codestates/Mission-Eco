const { challenge, challengelike } = require("../../models");
module.exports = async (req, res) => {
  //res.send('showAllLevel 테스트 성공'); qeury 가져오기
  console.log("req--", req);
  try {
    //챌린지의 리스트를 전체를 보내주기
    const challengeList = await challenge.findAll({
      include: [
        {
          attributes: ["user_id", "challenge_id"],
          model: challengelike,
          as: "challengelikes",
        },
      ],
    });
    const data = challengeList.map((el) => el.dataValues);
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
  }
};
