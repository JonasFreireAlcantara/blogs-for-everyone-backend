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

  async show(req, res, next) {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return next({
        statusCode: 404,
        message: 'Invalid post ID',
      });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return next({
        statusCode: 404,
        message: 'Post not found',
      });
    }

    return res.json(post);
  },

  async remove(req, res, next) {
    const { postId } = req.params;

    console.log(postId);

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return next({
        statusCode: 404,
        message: 'Invalid post ID',
      });
    }

    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return next({
        statusCode: 404,
        message: 'Post not found',
      });
    }

    return res.status(204).send();
  },
};
