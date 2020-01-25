const Category = require('../model/Category');
const Post = require('../model/Post');


module.exports = {
    
    async index(req, res) {
        const categories = await Category.find();
        return res.json(categories);
    },

    async show(req, res) {
        const { categoryId } = req.params;
        
        const posts = await Post.find({ category: categoryId });
        return res.json(posts);
    },

    async create(req, res) {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400)
                .json({ error: "You must inform the name" });
        }

        const categoryCreated = await Category.create({ name });
        return res.json(categoryCreated);
    }

};