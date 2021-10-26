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
      .sendStatus(205);
  } catch (error) {
    console.log(error);
    //res.status(500).json({ message: "server error" });
  }
};
