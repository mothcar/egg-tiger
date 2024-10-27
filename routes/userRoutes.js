const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", auth, getUsers);
router.post("/", createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
