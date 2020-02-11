const Post = require('../model/Post');


module.exports = {
    
    async index(req, res) {
        const posts = await Post.find();
        return res.json(posts);
    },

    async create(req, res) {
        const { postDate, author, category, title, elements } = req.body;

        if (!postDate || !author || !category || !title || !elements) {
            return res.json({ error: "bad format" });
        }

        const desiredPost = {
            postDate,
            author,
            category,
            title,
            elements
        };

        const createdPost = await Post.create(desiredPost);
        return res.json(createdPost);
    },

    async show(req, res) {
        const { postId } = req.params;

        const post = await Post.findById(postId);
        return res.json(post);
    },

    async remove(req, res) {
        const { postId } = req.params;

        const post = await Post.findByIdAndDelete(postId);
        return res.json(post);
    }

};
