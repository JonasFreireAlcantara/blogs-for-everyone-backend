const mongoose = require('mongoose');
const Post = require('../model/Post');

module.exports = {
  getActualDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${day}/${month}/${year}`;
  },

  async index(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  },

  async create(req, res) {
    const { author, category, title, elements } = req.body;

    if (!author || !category || !title || !elements) {
      return res.status(400).json({ error: 'bad format' });
    }

    const desiredPost = {
      postDate: module.exports.getActualDate(),
      author,
      category,
      title,
      elements,
    };

    const createdPost = await Post.create(desiredPost);
    return res.json(createdPost);
  },

  async show(req, res) {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).send('Invalid Post Id format');
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    return res.json(post);
  },

  async remove(req, res) {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).send('Invalid Post Id format');
    }

    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    return res.json(post);
  },
};
