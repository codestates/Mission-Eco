require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2h' })
  },
  sendAccessToken: (res, accessToken, userInfo) => {
    // JWT 토큰을 쿠키로 전달
    res.cookie('jwt', accessToken, {
      httpOnly: true,
      secure: true
    })
    res.send({ data: { userInfo }, message: 'ok' });
  },
  isAuthorized: (req) => {
    const cookie = req.headers.cookie;
    console.log('cookie=======', cookie);
    // 쿠키에 jwt 토큰이 없는 요청
    if(!cookie) return null; 

    const token = cookie.split(";")[0].split("=")[1];
    console.log('tokentoken=======', token)
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch(err) {
      // 토큰이 유효하지 않을 경우
      return null; 
    }

  }
};
