const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })

const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.get("/", getPosts);
// router.post("/", auth, createPost);
router.post("/", upload.single('uploaded_file'), createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
