module.exports = {
  modifyNickname: require("./userInfo").modifyNickname,
  modifyPassword: require("./userInfo").modifyPassword,
  deleteAccount: require("./userInfo").deleteAccount,
  getMyList: require("./myList").getMyList,
  auth: require("./auth"),
  checkPwd: require("./checkPwd"),
};
