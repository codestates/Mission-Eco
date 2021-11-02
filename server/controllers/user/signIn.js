const { user } = require("../../models"); // 경로 일치여부, 모델명 일치여부 확인
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const bcrypt = require("bcrypt");

module.exports = {
  signIn: async (req, res) => {
    console.log(req.body);
    /*
     * 1. email, password를 구조분해 할당으로 받는다.
     * 2. 등록된 이메일이 아닌 경우 (401)
     * 3. password와 DB에 저장된 hash와 비교한다
     * 4. 2번이 불일치 시 로그인 실패(400)
     * 5. jwt토큰을 생성하여 cookie로 전달한다.
     * 6. 3번이 일치 시 로그인 성공(200)
     */
    try {
      const { email, password } = req.body;

      // DB에 저장된 해당 유저의 hash값을 불러온다.
      const userInfo = await user.findOne({
        where: { email },
      });
      console.log("signin userInfo", userInfo);
      // 등록된 이메일이 아닌 경우
      if (!userInfo) {
        return res.sendStatus(401);
      }
      console.log("signin userInfo.password: ", userInfo.password);

      // hash와 요청받은 비밀번호 일치여부 확인
      const match = await bcrypt.compare(password, userInfo.password);

      // 비밀번호가 유효하지 않을때 (로그인 실패)
      if (!match) {
        return res.sendStatus(401);
      } else {
        // 비밀번호가 유효할 때 (로그인 성공)
        // jwt토큰을 생성하여 쿠키로 전달
        // 최종 응답에 유저 정보 전달
        const payload = userInfo.dataValues;
        delete payload.password;
        const accessToken = generateAccessToken(payload);
        sendAccessToken(res, accessToken, payload);
      }
    } catch (err) {
      console.log("signin err: ", err);
    }
  },
};
