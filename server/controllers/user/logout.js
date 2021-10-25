module.exports = async (req, res) => {
  try {
    res
      .clearCookie(
        "jwt" /**, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/",
        domain: "https://localhost:3000",
      } */
      )
      .status(205)
      .json({ message: "logout success" });
  } catch (error) {
    console.log(error);
    //res.status(500).json({ message: "server error" });
  }
};
