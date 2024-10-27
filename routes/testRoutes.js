const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getTests,
  createTest,
  updateTest,
  deleteTest
} = require("../controllers/testController");

router.get("/", getTests);
router.post("/", auth, createTest);
router.put("/:id", auth, updateTest);
router.delete("/:id", auth, deleteTest);

module.exports = router;
