const nodemailer = require("nodemailer");

module.exports = {
  checkEmail: async (req, res) => {
    try {
      console.log("body", req.body);
      function generateRandomCode(n) {
        let str = "";
        for (let i = 0; i < n; i++) {
          str += Math.floor(Math.random() * 10);
        }
        return str;
      }
      const email = req.body.email;
      const randomNum = generateRandomCode(6);
      let transporter = nodemailer.createTransport({
        service: "gmail",
        prot: 587,
        host: "smtp.gmlail.com",
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.MAILID,
          pass: process.env.MAILPW,
        },
      });

      const contents = await transporter.sendMail({
        from: process.env.MAILID,
        to: email,
        subject: "MISSIONECO 회원가입 인증 이메일",
        text: `이메일 인증번호 ${randomNum} 를 입력해주세요.`,
      });

      //  const checkEmail = await new Object();
      return res.status(200).send({ randomNum });
    } catch (err) {
      console.log("checkEmail err: ", err);
    }
  },
};
