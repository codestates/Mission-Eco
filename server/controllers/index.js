const { Router } = require("express");
const router = Router();
const userCtrl = require("./user");
const mypageCtrl = require("./mypage");
const challengeCtrl = require("./challenge");
const challengeLogCtrl = require("./challengeLog");
const badgeCtrl = require("./badge");

// user
router.post("/user/signin", userCtrl.signIn);
router.post("/user/logout", userCtrl.logout);
router.post("/user/signup", userCtrl.signUp);
router.post("/user/kakao-signin", userCtrl.kakaoSignin);
router.post("/user/google-signin", userCtrl.googleSignin);
router.post("/user/google-signin/callback", userCtrl.googleCallback);
router.get("/user/validation/nickname/:nickname", userCtrl.nickName);
router.get("/user/validation/email/:email", userCtrl.email);

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
router.delete("/challenge-log", challengeLogCtrl.delete);

// badge
router.get("/badge", badgeCtrl.badgeList);
router.post("/badge", badgeCtrl.post);
router.get("/myBadgeList/:userId", badgeCtrl.myBadgeList);

module.exports = router;
