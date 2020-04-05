const mongoose = require('mongoose');
const Post = require('../model/Post');
const Category = require('../model/Category');

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

  async create(req, res, next) {
    const { author, category, title, elements } = req.body;

    const existentCategory = await Category.findById(category);

    if (!existentCategory) {
      return next({
        statusCode: 404,
        message: `Not found category with ID: ${category}`,
      });
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
