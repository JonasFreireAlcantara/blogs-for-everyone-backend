const Category = require('../model/Category');
const Post = require('../model/Post');

module.exports = {
  async index(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },

  async show(req, res, next) {
    const { categoryUrl } = req.params;

    const category = await Category.findOne({ url: categoryUrl });

    if (!category) {
      return next({
        statusCode: 404,
        message: 'error in CategoryController',
      });
    }

    return res.json(category);
  },

  async findPostsOfCategory(req, res) {
    const { categoryUrl } = req.params;

    const category = await Category.findOne({ url: categoryUrl });

    const posts = await Post.find({ category: category._id });
    return res.json(posts);
  },

  async create(req, res, next) {
    const { name, url, description } = req.body;

    const category = await Category.findOne({ url });

    if (category) {
      return next({
        statusCode: 409,
        message: `Already exists a category with such url: '${url}'`,
      });
    }

    const categoryCreated = await Category.create({ name, url, description });
    return res.json(categoryCreated);
  },
};
