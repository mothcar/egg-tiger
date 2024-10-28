const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: false },
  content: { type: String, required: false },
  image: { type: String, required: false },
  // Add more fields as per your product requirements
});

module.exports = mongoose.model('Post', postSchema);