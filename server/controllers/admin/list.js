const { user, challenge, challengelog } = require("../../models");

module.exports = async (req, res) => {
  try {
    const challengeList = await challenge.findAll();
    const logList = await challengelog.findAll({
      include: [
        { model: user, attributes: ["nickname"] },
        { model: challenge, attributes: ["name"] },
      ],
    });
    return res.status(200).send({ challengeList, logList });
  } catch (error) {
    console.log(error);
  }
};
