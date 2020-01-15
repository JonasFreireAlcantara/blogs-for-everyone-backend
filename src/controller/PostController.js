const Post = require('../model/Post');


module.exports = {
    
    async index(req, res) {
        const posts = await Post.find();
        return res.json(posts);
    },

    async create(req, res) {
        const { postDate, title, elements } = req.body;

        if (!postDate || !title || !elements) {
            return res.json({ error: "Post bad format" });
        }

        const newPost = await Post.create(req.body);
        return res.json(newPost);
    },

    async show(req, res) {
        const { post_id } = req.params;

        const post = await Post.findById(post_id);
        return res.json(post);
    }

};
