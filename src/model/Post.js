const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,

  postDate: String,

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },

  title: String,

  elements: [
    {
      element: String,
      content: String,
    },
  ],
});

module.exports = mongoose.model('Post', PostSchema);
