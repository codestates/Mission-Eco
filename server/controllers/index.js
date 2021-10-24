const { Router } = require("express");
const router = Router();
const userCtrl = require("./user");
const mypageCtrl = require("./mypage");
const challengeCtrl = require("./challenge");
// const mediaCtrl = require('./media');
// const vendorCtrl = require('./vendor');

// user
router.post("/user/signin", userCtrl.signIn);
router.post("/user/signup", userCtrl.signUp);
router.get("/user/validation/nickname/:nickname", userCtrl.nickName);
router.get("/user/validation/email/:email", userCtrl.email);

// mypage
router.patch("/mypage/userinfo", mypageCtrl.modifyMyInfo);
router.delete("/mypage/userinfo", mypageCtrl.deleteAccount);
router.get("/mypage/mylist/:userId", mypageCtrl.getMyList);
router.delete("/mypage/mylist/post/:postId", mypageCtrl.deletePost); // Advancd task
router.get("/mypage/auth", mypageCtrl.auth);
router.post("/mypage/validation-password", mypageCtrl.checkPwd);

// challenge
router.get("/challenge/all-level", challengeCtrl.showAllLevel);
router.get("/challenge/:level", challengeCtrl.showOneLevel);
router.post("/challenge/like", challengeCtrl.like);
router.post("/challenge/unlike", challengeCtrl.unLike);
router.get("/challenge/post/:challengeId", challengeCtrl.getOneChallengePost);
router.post("/challenge/post", challengeCtrl.submitPost);

// media
// router.get('/media', mediaCtrl.showAllMediaList);
// router.post('/media/unlike', mediaCtrl.unLike);
// router.post('/media/like', mediaCtrl.like);

// // vendor
// router.get('/vendor', vendorCtrl.showAllVendorList);
// router.post('/vendor/unlike', vendorCtrl.unLike);
// router.post('/vendor/like', vendorCtrl.like);

module.exports = router;
