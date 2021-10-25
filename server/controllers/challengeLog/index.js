const { challengelog } = require("../../models");
module.exports = {
  post: async (req, res) => {
    //res.send("challenge-log 포스팅 성공");
    try {
      const { userId, challengeId, img, contents } = req.body;
      console.log("dddddddddddddfdsfnlwenflewn", req.body);
      if (!userId || !challengeId || !img || !contents) {
        res.status(400).send({ message: "post contents not found" });
      } else {
        const new_post = await challengelog.create({
          user_id: userId,
          challenge_id: challengeId,
          img: img,
          challengelog_contents: contents,
        });
        res.status(201).send({ data: new_challengelog, message: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    res.send("challenge-log 기록 삭제");
  },
};
