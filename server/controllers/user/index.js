module.exports = {
  signIn: require("./signIn").signIn,
  signUp: require("./signUp").signUp,
  nickName: require("./validation").nickName,
  email: require("./validation").email,
  kakaoSignin: require("./kakaoSignin"),
};
