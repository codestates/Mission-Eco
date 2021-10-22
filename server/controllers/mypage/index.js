module.exports = {
    modifyMyInfo: require('./userInfo').modifyMyInfo,
    deleteAccount: require('./userInfo').deleteAccount,
    getMyList: require('./myList').getMyList,
    deletePost: require('./myList').deletePost,
    auth: require('./auth'),
    checkPwd: require('./checkPwd')
};