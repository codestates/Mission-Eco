const { challengelike } = require("../../models");
module.exports = async (req, res) => {
  try {
    const likeCount = await challengelike.findAll({
      group: ["challenge_id"],
      attributes: [
        "challenge_id",
        [sequelize.fn("COUNT", "challenge_id"), "likeCount"],
      ],
    });
    res.status(200).send({ likeCount });
  } catch (error) {
    console.log(error);
  }
};
