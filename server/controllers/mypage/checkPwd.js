const { user } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  res.send("checkPwd 테스트 성공");
  //비크립트 적용해서 확인해야하나??
  const { userId, password } = req.body;
  //id와 password가 들어오지 않을 때
  if (!userId || !password) {
    res.status(400).send({ message: "Bad Requset" });
  } else {
    //DB에서 해당하는 user가 있는지 확인
    const findUser = await user.findOne({
      where: {
        id: userId,
      },
    });
    //db에 일치하는 유저가 없을 경우
    if (!findUser) {
      res.status(401).send({ message: "invalid user" });
    } else {
      //암호화한 비밀번호와 비교해서 두 개의 값이 맞는지 검사
      const match = await bcrypt.compare(password, findUser.password);
      //두 값이 맞지 않으면
      if (!match) {
        res.status(401).send({ message: "invalid password" });
      } else {
        //비밀번호 일치하면
        res.status(200).send({ message: "ok" });
      }
    }
  }
};
