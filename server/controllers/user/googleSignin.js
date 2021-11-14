const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const bcrypt = require("bcrypt");

module.exports = {
  /**
   * DB에 등록된 구글 유저가 있는지 확인
   * 없으면 비밀번호를 hash한 후, 새로운 데이터로 저장
   * 새롭게 등록된 유저 포함하여 전달 받은 유저의 데이터를 DB에서 불러옴
   * 쿠키에 accessToken 전달
   * **/
  googleSignin: async (req, res) => {
    // 1. 구글로 authorization code를 요청 함
    // console.log('서버로 도착')
    return res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&access_type=offline&response_type=code&state=hello&redirect_uri=https://localhost:4000/user/google-signin/callback&client_id=${process.env.GOOGLE_CLIENT_ID}`
    );
  },
  googleCallback: async (req, res) => {
    // 2. 구글에서 redirect_uri로 authorization code를 준다
    const code = await req.query.code; // authorization code
    // console.log('어떠라이제이션 코드---------', code)
    try {
      // 3. 받은 authorization code로 구글에 access token 요청 함
      const result = await axios.post(
        `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=https://localhost:4000/user/google-signin/callback&grant_type=authorization_code`
      );
      //   console.log('구글 oauth result : ', result);
      // 4. access token으로 유저정보 요청 함
      const userInfo = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${result.data.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${result.data.access_token}`,
          },
        }
      );
      //   console.log(' 구글 oauth userInfo : ', userInfo);

      // 5. 받은 유저 정보를 이용하여
      // 등록된 유저 이메일이 없다면
      // DB에 저장을 하고,비밀번호도 hash화 함
      const { email, name, password } = userInfo.data;

      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          console.log("signup bcrypt hash 생성 오류", err);
        }

        const [db_user, create] = await user.findOrCreate({
          where: { email },
          defaults: {
            nickname: nickname,
            email,
            password: hash,
            admin: 0,
          },
        });

        const data = db_user.dataValues;
        //   console.log("google db_user: ", db_user);
        //  console.log("google data: ", data);

        // 6. jwt토큰 생성 후,
        const accessToken = generateAccessToken(data);
        //console.log('google accessToken', accessToken)

        // 7. userInfo 받아오는 것을 성공했다면
        // 클라이언트로 다시 redirect한다
        res.redirect("https://localhost:3000/mypage"); // !! 리다이렉트 헤이지 확정되면 수정하기!!

        // 8. cookie로 jwt토큰을 보내고, 최종응답을 종료
        sendAccessToken(res, accessToken);
      });
    } catch (err) {
      // userInfor가 받아오는 것을 실패했다면
      console.log("구글 oauth err : ", err);
      res.sendStatus(500);
    }
  },
};
