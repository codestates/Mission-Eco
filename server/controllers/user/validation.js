const { user } = require("../../models");
module.exports = {
  nickName: async (req, res) => {
    //res.send('nickName 테스트 성공');
    const { nickname } = req.params;
    //닉네임이 안 들어온 경우
    if (!nickname) {
      res.status(400).send({ message: "Bad Request" });
    } else {
      const findnick = await user.findOne({
        where: { nickname },
      });
      //같은 닉네임을 DB에서 찾아보고 없으면 추가해도 되니까 200응답
      if (!findnick) {
        res.status(200).send({
          message: "ok",
        });
      } else {
        // DB에 이미 존재하는 값이므로
        res.status(409).send({ message: "already exist" });
      }
    }
  },
  email: async (req, res) => {
    //res.send("email 테스트 성공");
    const { email } = req.params;
    console.log("eeee", email);
    //이메일이 안 들어온 경우
    if (!email) {
      res.status(400).send({ message: "Bad Request" });
    } else {
      const findemail = await user.findOne({
        where: { email },
      });
      console.log("server", findemail);
      //같은 이메일을 DB에서 찾아보고 없으면 추가해도 되니까 200응답
      if (!findemail) {
        res.status(200).send({
          message: "ok",
        });
      } else {
        // DB에 이미 존재하는 값이므로
        res.status(409).send({ message: "already exist" });
      }
    }
  },
};
