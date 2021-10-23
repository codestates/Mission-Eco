const { post, user } = require("../../models");
module.exports = {
  getOneChallengePost: (req, res) => {
    res.send("getOneChallengePost 테스트 성공");
  },
  submitPost: async (req, res) => {
    //res.send('submitPost 테스트 성공');
    try {
      const { userId, challengeId, img, contents } = req.body;
      if (!userId || !challengeId || !img || !contents) {
        res.status(400).send({ message: "post contents not found" });
      } else {
        const new_post = await post.create({
          user_id: userId,
          challenge_id: challengeId,
          img: img,
          post_contents: contents,
        });
        res.status(201).send({ message: "success" });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
