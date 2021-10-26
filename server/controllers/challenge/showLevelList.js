const { challenge } = require("../../models");
module.exports = {
  showAllLevel: async (req, res) => {
    //res.send('showAllLevel 테스트 성공');
    try {
      //챌린지의 리스트를 전체를 보내주기
      const challengeList = await challenge.findAll();
      res.status(200).send({ challengeList, message: "ok" });
    } catch (error) {
      console.log(error);
    }
  },
  showOneLevel: (req, res) => {
    res.send("showOneLevel 테스트 성공");
  },
};
