const axios = require("axios");
const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${req.body.authorizationCode}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        axios
          .get(
            `https://kapi.kakao.com/v2/user/me?access_token=${res.data.access_token}`,
            {
              headers: {
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then(async (res) => {
            const [kakaoUserInfo, created] = user.findOrCreate({
              where: { email: res.data.kakao_account.email },
              defaults: {
                email: res.data.kakao_account.email,
                password: null, //이 부분은 확인해보기
                point: 0,
                nickName: res.data.properties.nickname,
                admin: "user",
              },
            });
            //userInfo에 카카오로 로그인 하려는 사람의 정보가 담김
            //이 유저 정보로 토큰을 발급해서 클라이언트로 전달하면 된다.
            delete kakaoUserInfo.dataValues.password;
            const accessToken = generateAccessToken(kakaoUserInfo.dataValues);
            sendAccessToken(res, accessToken);
          });
      });
  } catch (error) {
    console.log(error);
  }
};
