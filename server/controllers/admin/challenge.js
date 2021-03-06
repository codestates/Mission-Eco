const { challenge, challengelike } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      /**
       * body 값으로 하나라도 안 들어오면 빠꾸
       * 같은 이름의 challenge가 db에 있으면 빠꾸
       * 생성
       */
      const { img, name, contents, level, upload } = req.body;
      //body 값으로 하나라도 안 들어오면 return
      if (!img || !name || !contents || !level) {
        return res.sendStatus(400);
      } else {
        const findChallenge = await challenge.findOne({
          where: { name },
        });
        if (findChallenge) {
          return res
            .status(409)
            .send({ message: "이미 존재하는 챌린지 이름입니다." });
        } else {
          await challenge.create({
            img,
            name,
            contents,
            level,
            upload,
          });
          const challengeList = await challenge.findAll();
          return res.status(201).send({ challengeList });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
