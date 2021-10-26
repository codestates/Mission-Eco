const { challengelike } = require("../../models");
module.exports = async (req, res) => {
  try {
    const likeList = await challengelike.findAll();
    res.status(200).send({ likeList });
  } catch (error) {
    console.log(error);
  }
};
