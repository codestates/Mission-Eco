const { user, challenge, challengelog } = require("../../models");

module.exports = async (req, res) => {
  try {
    //res.send("로그 삭제 성공");
    /**
     * 부적절한 로그라고 생각되는 것 삭제할 수 있는 기능
     * 해당하는 로그의 아이디를 받아서 그 값을 삭제하고 전체 로그 리턴
     */
    console.log("req.parmas--", req.params);
    const { logId } = req.params;
    if (!logId) {
      return res.sendStatus(400);
    }
    const deleteLog = await challengelog.findByPk(logId);
    if (!deleteLog) {
      return res.sendStatus(400);
    }
    await deleteLog.destroy();

    const logList = await challengelog.findAll({
      include: [
        { model: user, attributes: ["nickname"] },
        { model: challenge, attributes: ["name"] },
      ],
    });
    return res.status(200).send({ logList });
  } catch (error) {
    console.log(error);
  }
};
