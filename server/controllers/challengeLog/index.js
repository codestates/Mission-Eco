const { user, challengelog, challenge } = require("../../models");
module.exports = {
  get: async (req, res) => {
    try {
      //inner join 해주기 user_nickname도 함께 넘겨 주기! 맞게나오려나
      const challengeLogList = await challengelog.findAll({
        include: [
          { model: user, attributes: ["nickname"] },
          { model: challenge, attributes: ["name"] },
        ],
      });
      const challengeList = await challenge.findAll({
        attributes: ["id", "name"],
      });
      res.status(200).send({ challengeLogList, challengeList });
    } catch (error) {
      console.log(error);
    }
  },
  post: async (req, res) => {
    //res.send("challenge-log 포스팅 성공");
    try {
      const { userId, challengeId, img, contents } = req.body;
      if (!userId || !challengeId || !img || !contents) {
        res.sendStatus(400);
      } else {
        const new_post = await challengelog.create({
          user_id: userId,
          challenge_id: challengeId,
          img: img,
          challengelog_contents: contents,
        });
        res.status(201).send({ new_post });
      }
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;
    const deleteLog = await challengelog.findByPk(id);
    if (!deleteLog) {
      return res.sendStatus(400);
    }
    await deleteLog.destroy();
    res.sendStatus(204);
  },
};
