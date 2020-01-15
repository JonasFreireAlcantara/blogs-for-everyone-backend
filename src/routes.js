const express = require('express');
const routes = express.Router();

const PostController = require('./controller/PostController');

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.create);
routes.get('/posts/:post_id', PostController.show);

module.exports = routes;
