const { challenge } = require("../../models");
module.exports = async (req, res) => {
  //res.send('showAllLevel 테스트 성공'); qeury 가져오기
  try {
    //챌린지의 리스트를 전체를 보내주기
    const challengeList = await challenge.findAll();
    res.status(200).send({ challengeList });
  } catch (error) {
    console.log(error);
  }
};
