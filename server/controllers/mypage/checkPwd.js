const { user } = require("../../models");
module.exports = (req, res) => {
  res.send("checkPwd 테스트 성공");
  //비크립트 적용해서 확인해야하나??
  /**const { userId, password } = req.body;
  if (!userId || !password) {
    res.status(400).send({ message: "Bad Requset" });
  } else {
    const findUser = await user.findOne({
      where: {
        id: userId,
        password,
      },
    });
    if (!findUser) {
      res.status(401).send({ message: "invalid password" });
    } else {
      res.status(200).send({ message: "ok" });
    }
  } */
};
