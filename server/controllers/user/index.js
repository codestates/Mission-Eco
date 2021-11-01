module.exports = {
  signIn: require("./signIn").signIn,
  logout: require("./logout"),
  signUp: require("./signUp").signUp,
  nickName: require("./validation").nickName,
  email: require("./validation").email,
};
