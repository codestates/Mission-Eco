module.exports = {
  modifyNickname: require("./userInfo").modifyNickname,
  modifyPassword: require("./userInfo").modifyPassword,
  deleteAccount: require("./userInfo").deleteAccount,
  getMyList: require("./myList").getMyList,
  deletePost: require("./myList").deletePost,
  auth: require("./auth"),
  checkPwd: require("./checkPwd"),
};
