// src/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const morgan = require("morgan");
const helmet = require("helmet");

require("dotenv").config();
require('./db');

const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");


const app = express();

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: true}));  
// app.use(bodyParser.urlencoded());  //
app.use(bodyParser.json());	//요청 본문을 json 형태로 파싱

app.use(express.urlencoded({ extended: true })); // URL 인코딩
app.use(express.json()); // JSON 파싱

// 미들웨어 설정
app.use(helmet()); // 보안 헤더 설정
app.use(morgan("dev")); // 로깅
app.use(cors()); // CORS 활성화


// 기본 라우트
app.get("/", (req, res) => {
  res.json({ message: "서버가 정상적으로 실행중입니다." });
});

const apiRoutes = require("./routes");
// API 라우트
app.use("/api", apiRoutes);

// 404 처리
app.use(notFound);

// 에러 처리
app.use(errorHandler);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행중입니다.`);
});

module.exports = app;
