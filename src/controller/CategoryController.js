const Category = require('../model/Category');
const Post = require('../model/Post');


module.exports = {
    
    async index(req, res) {
        const categories = await Category.find();
        return res.json(categories);
    },

    async show(req, res) {
        const { category_id } = req.params;
        const posts = await Post.find({ category: category_id });

        return res.json(posts);
    }

};