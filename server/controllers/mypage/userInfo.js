const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions/index");
const bcrypt = require("bcrypt");

module.exports = {
  modifyNickname: async (req, res) => {
    //res.send("nickName 테스트 성공");
    try {
      const { userId, newNickname } = req.body;
      //유저 아이디 안 들어온 경우
      if (!userId) {
        return res.sendStatus(400);
      }
      const userInfo = await user.findByPk(userId);
      if (!userInfo) {
        //db에 같은 값의 유저가 없음
        return res.sendStatus(401);
      } else {
        //새로운 닉네임 들어오지 않은 경우
        if (!newNickname) {
          return res.sendStatus(400);
        } else {
          //새로운 닉네임 값 들어온 경우
          await userInfo.update({ nickname: newNickname });
          return res.sendStatus(204);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  modifyPassword: async (req, res) => {
    //res.send("nickName 테스트 성공");
    try {
      const { userId, newPassword } = req.body;
      console.log(req.body);
      if (!userId) {
        return res.sendStatus(400);
      }
      const userInfo = await user.findByPk(userId);
      if (!userInfo) {
        //db에 같은 값의 유저가 없음
        return res.sendStatus(401);
      } else {
        //새로운 닉네임과 비밀번호 둘 다 들어오지 않은 경우
        if (!newPassword) {
          return res.sendStatus(400);
        } else {
          //새로운 패스워드 들어온 경우
          bcrypt.hash(newPassword, 10, async (err, hash) => {
            if (err) {
              console.log("modify bycrypt hash 생성 오류", err);
            }
            await userInfo.update({ password: hash });
          });
          return res.sendStatus(204);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteAccount: async (req, res) => {
    //res.send('email 테스트 성공');
    try {
      const accessTokenData = isAuthorized(req);
      if (!accessTokenData) {
        res.sendStatus(400);
      } else {
        const { id } = accessTokenData;
        const deleteUser = await user.findByPk(id);
        if (!deleteUser) {
          res.sendStatus(404);
        } else {
          await deleteUser.destroy();
          res.clearCookie("jwt");
          res.sendStatus(204);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
