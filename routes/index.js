const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// 사용자 라우트
const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

// 게시물 라우트
const postRoutes = require("./postRoutes");
router.use("/posts", postRoutes);

//test
const postRoutes = require("./testRoutes");
router.use("/tests", testRoutes);

module.exports = router;
