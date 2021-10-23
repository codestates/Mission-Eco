const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");

module.exports = (req, res) => {
  //res.send("auth test 성공");
  const accessTokenData = isAuthorized(req);
  //쿠키에 jwt토큰이 없거나 토큰 유효하지 않은 경우
  if (!accessTokenData) {
    res.status(400).send({ data: null, message: "invalid access token" });
  } else {
    const { id } = accessTokenData;
    const data = await user.findOne({ where: { id } });
    delete data.dataValues.password;
    res
      .status(200)
      .send({ data: { userInfo: data.dataValues }, message: "ok" });
  }
};
