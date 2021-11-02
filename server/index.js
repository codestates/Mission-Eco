require("dotenv").config();

const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const controllers = require("./controllers");

// json payload로 들어온 요청을 읽어줌
app.use(express.json());

// urlencoded 페이로드와 함께 요청온 것을 읽지 않게함
app.use(express.urlencoded({ extended: false }));

// cors 설정
// !mission eco 도메인 생성시 origin에 추가해야함
app.use(
  cors({
    origin: [
      "https://localhost:3000",
      "http://localhost:3000",
      "https://mission-eco.co.kr"
    ],
    credentials: true, // true설정은 header를 전달해줌
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());

// 라우팅
app.use(controllers);

// 서버 테스트
app.get("/", (req, res) => {
  res.status(200).send("hello world....!!");
});

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버 실행
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버 실행
let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("https server success!"));
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server success!"));
}

module.exports = server;
