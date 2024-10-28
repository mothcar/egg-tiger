const Post = require('../models/Post');

const getPosts = async (req, res, next) => {
  try {
    // const posts = [{ id: 1, title: '첫 번째 게시물' }]; // 예시 데이터
    const posts = await Post.find();
    console.log('Post request............. : ', posts)
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    // 게시물 생성 로직
    // const post = { id: 2, title, content, userId: req.user.id };
    let params = {
      title: title,
      content: content,
      // image: req.file.location
    }
    const post = await Post.create(params);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    // 게시물 업데이트 로직
    const post = { id, title, content, userId: req.user.id };
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    // 게시물 삭제 로직
    res.json({ message: '게시물이 삭제되었습니다.' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
};