module.exports = async (req, res) => {
  try {
    res.clearCookie("jwt").sendStatus(205);
  } catch (error) {
    console.log(error);
    //res.status(500).json({ message: "server error" });
  }
};
