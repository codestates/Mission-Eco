const { user } = require("../../models");
const bcrypt = require("bcrypt");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    //res.send("admin signin 성공");
    /**
     * 1. 받아온 req.body 값을 확인
     * 2. DB에 그 값이 있는지 확인하고 그 값의 admin값이 1이 아니면 401 return
     * 3. 비밀번호 일치여부 확인하고 맞으면
     * 4. 토큰 생성해서 쿠키로 전달
     */
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    } else {
      const adminInfo = await user.findOne({
        where: { email },
      });
      //DB에 일치하는 유저가 없는 경우
      if (!adminInfo) {
        return res.status(401).send({ message: "일치하는 정보가 없습니다." });
      } else {
        if (!adminInfo.admin) {
          return res.status(401).send({ message: "관리자 권한이 필요합니다." });
        } else {
          const match = await bcrypt.compare(password, adminInfo.password);
          if (!match) {
            return res
              .status(401)
              .send({ message: "비밀번호가 일치하지 않습니다." });
          } else {
            const payload = adminInfo.dataValues;
            delete payload.password;
            const accessToken = generateAccessToken(payload);
            sendAccessToken(res, accessToken, payload);
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
