const mongoose = require(`mongoose`);

const PostSchema = new mongoose.Schema({
    postDate: String,
    title: String,
    elements: [{
        element: String,
        content: String,
    }],
    comments: [{
        username: String,
        content: String,
    }],
});

module.exports = mongoose.model('Post', PostSchema);
