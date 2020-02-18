const Category = require('../model/Category');
const Post = require('../model/Post');

module.exports = {

  async index(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },

  async show(req, res) {
    const { categoryUrl } = req.params;

    const category = await Category.findOne({ url: categoryUrl });
    return res.json(category);
  },

  async findPostsOfCategory(req, res) {
    const { categoryUrl } = req.params;

    const category = await Category.findOne({ url: categoryUrl });

    const posts = await Post.find({ category: category._id });
    return res.json(posts);
  },

  async create(req, res) {
    const { name, url, description } = req.body;

    if (!name || !url || !description) {
      return res.status(400)
        .json({ error: 'Fields you must inform: name, url, description' });
    }

    const categoryCreated = await Category.create({ name, url, description });
    return res.json(categoryCreated);
  },

};
