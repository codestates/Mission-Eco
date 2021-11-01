const axios = require("axios");
const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = {
  kakaoLogin: async (req, res) => {
    try {
      return res.redirect(
        `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&&response_type=code`
      );
    } catch (error) {
      console.log(error);
    }
  },
  kakaoCallback: async (req, res) => {
    try {
      console.log("kakao---", req.query.code);
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${req.query.code}`,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then(async (res1) => {
          console.log("req.data.accesstocke--", res1.data.access_token);
          axios
            .get(
              `https://kapi.kakao.com/v2/user/me?access_token=${res1.data.access_token}`,
              {
                headers: {
                  "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
              }
            )
            .then(async (res2) => {
              console.log("res.data---", res2.data);
              const [kakaoUserInfo, created] = await user.findOrCreate({
                where: { email: res2.data.kakao_account.email },
                defaults: {
                  email: res2.data.kakao_account.email,
                  password: null, //이 부분은 확인해보기
                  nickname: res2.data.properties.nickname,
                },
              });
              console.log("kakao--", kakaoUserInfo.dataValues);
              //userInfo에 카카오로 로그인 하려는 사람의 정보가 담김
              //이 유저 정보로 토큰을 발급해서 클라이언트로 전달하면 된다.
              delete kakaoUserInfo.dataValues.password;
              const accessToken = generateAccessToken(kakaoUserInfo.dataValues);
              res.cookie("jwt", accessToken, {
                sameSite: "None",
                secure: true,
                httpOnly: true,
              });
              res.redirect("https://localhost:3000/oauth");
            });
        });
    } catch (error) {
      console.log(error);
    }
  },
};
