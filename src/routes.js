const express = require('express');
const routes = express.Router();

const PostController = require('./controller/PostController');
const CategoryController = require('./controller/CategoryController');


routes.get('/posts', PostController.index);
routes.get('/posts/:post_id', PostController.show);
routes.post('/posts', PostController.create);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:category_id', CategoryController.show);

module.exports = routes; //
