require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2h" });
  },
  sendAccessToken: (res, accessToken, userInfo) => {
    // JWT 토큰을 쿠키로 전달
    console.log("accesstoken---", accessToken);
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      secure: true,
    });
    return res.send({ data: { userInfo }, message: "ok" });
  },
  isAuthorized: (req) => {
    const jwt = req.cookies.jwt;
    console.log("jwt=======", jwt);
    // 쿠키에 jwt 토큰이 없는 요청
    if (!jwt) return null;

    //const token = jwt.split(";")[0].split("=")[1];
    //console.log("tokentoken=======", token);
    try {
      return verify(jwt, process.env.ACCESS_SECRET);
    } catch (err) {
      // 토큰이 유효하지 않을 경우
      return null;
    }
  },
};
