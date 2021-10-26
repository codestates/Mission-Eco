const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  /**
   * DB에 등록된 구글 유저가 있는지 확인
   * 없으면 비밀번호를 hash한 후, 새로운 데이터로 저장
   * 새롭게 등록된 유저 포함하여 전달 받은 유저의 데이터를 DB에서 불러옴
   * 쿠키에 accessToken 전달
   * **/
  try {
    const { email, nickname } = req.body;
    const token_id = req.headers.authorization;

    // DB에 등록되지 않은 유저라면
    // 받은 token_id를 가지고 비밀번호 생성
    bcrypt.hash(token_id, 10, async (err, hash) => {
      if (err) {
        console.log("signup bcrypt hash 생성 오류", err);
      }

      // hash를 포함한 새 유저 정보를 DB에 저장하고 데이터 찾는다
      // 기존 유저라면 저장하지 않고 데이터만 찾는다
      const [db_user, create] = await user.findOrCreate({
        where: { email },
        defaults: {
          nickname,
          email,
          password: hash,
        },
      });

      console.log("구글 signup db_user: ", db_user);

      const payload = db_user.dataValues;
      delete db_user.password;
      console.log("구글 signup payload: ", payload);

      // 찾은 데이터로 accessToken 발급
      const accessToken = generateAccessToken(payload);

      // 쿠키로 accessToken을 전달
      sendAccessToken(res, accessToken);
    });
  } catch (err) {
    console.log("구글 로그인 에러", err);
  }
};
