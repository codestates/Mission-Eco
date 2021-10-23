const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");

module.exports = {
  modifyMyInfo: async (req, res) => {
    res.send("nickName 테스트 성공");
    /**const { email } = req.body;
  const inform = await user.findOne({
    where: { email: email },
  });
  if (!inform) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const newNick = req.body.nickname;
  const newPass = req.body.password;
  console.log("inform-----", inform, newNick, newPass);
  if (!newNick && !newPass) {
    return res.status(400).json({ message: "Bad Request" });
  }
  if (newNick && newPass) {
    await inform.update({ nickname: newNick, password: newPass });

    return res.status(200).json({ message: "completed" });
  }
  if (newNick) {
    await inform.update({ nickname: newNick });

    return res.status(200).json({ message: "completed" });
  }
  if (newPass) {
    await inform.update({ password: newPass });

    return res.status(200).json({ message: "completed" });
  }
};
조금 더 공부해서 작성하기 patch랑 비크립트 공부 후 수정 */
  },
  deleteAccount: async (req, res) => {
    //res.send('email 테스트 성공');
    const accessTokenData = isAuthorized(req);
    if (!accessTokenData) {
      res.status(400).send({ message: "invalid access token" });
    } else {
      const { id } = accessTokenData;
      const deleteUser = await user.findByPk(id);
      if (!deleteUser) {
        res.status(404).send({ message: "not found" });
      } else {
        await deleteUser.destroy();
        res.status(204).send({
          message: "user deleted",
        });
      }
    }
  },
};
