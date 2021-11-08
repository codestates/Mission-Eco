const { Router } = require("express");
const router = Router();
const userCtrl = require("./user");
const mypageCtrl = require("./mypage");
const challengeCtrl = require("./challenge");
const challengeLogCtrl = require("./challengeLog");
const authCtrl = require("./auth");
const badgeCtrl = require("./badge");
const adminCtrl = require("./admin");

// users
router.post("/user/signin", userCtrl.signIn);
router.post("/user/logout", userCtrl.logout);
router.post("/user/signup", userCtrl.signUp);
router.get("/user/validation/nickname/:nickname", userCtrl.nickName);
router.get("/user/validation/email/:email", userCtrl.email);

//auth
router.get("/auth/kakao", authCtrl.kakaoLogin);
router.get("/auth/kakaoCallback", authCtrl.kakaoCallback);
router.get("/auth/google", authCtrl.googleLogin);
router.get("/auth/googleCallback", authCtrl.googleCallback);

// mypage
router.patch("/mypage/userinfo/nickname", mypageCtrl.modifyNickname);
router.patch("/mypage/userinfo/password", mypageCtrl.modifyPassword);
router.delete("/mypage/userinfo", mypageCtrl.deleteAccount);
router.get("/mypage/mylist", mypageCtrl.getMyList);
router.get("/mypage/auth", mypageCtrl.auth);
router.post("/mypage/validation-password", mypageCtrl.checkPwd);

// challenge
router.get("/challenge", challengeCtrl.showChallenge);
router.get("/challenge/like", challengeCtrl.likeList);
router.get("/challenge/userlike", challengeCtrl.userLike);
router.post("/challenge/like", challengeCtrl.like);
router.post("/challenge/unlike", challengeCtrl.unLike);

// challenge-log
router.get("/challenge-log", challengeLogCtrl.get);
router.post("/challenge-log", challengeLogCtrl.post);
router.delete("/challenge-log:logId", challengeLogCtrl.delete);

// badge
router.get("/badge", badgeCtrl.badgeList);
router.post("/badge", badgeCtrl.post);
router.get("/myBadgeList/:userId", badgeCtrl.myBadgeList);

//admin
router.post("/admin/signin", adminCtrl.signIn);
router.post("/challenge", adminCtrl.challengePost);
router.get("/admin/list", adminCtrl.getList);
//router.patch("/challenge", adminCtrl.challengePatch);
//router.delete("/challenge", adminCtrl.challengeDelete);
router.delete("/admin/challenge-log/:logId", adminCtrl.adminLog);

module.exports = router;
