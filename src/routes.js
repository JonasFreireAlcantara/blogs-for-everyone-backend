const express = require('express');
const routes = express.Router();

const PostController = require('./controller/PostController');
const CategoryController = require('./controller/CategoryController');
const UserController = require('./controller/UserController');


routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.post('/users', UserController.create);
routes.delete('/users/:userId', UserController.delete);

routes.get('/posts', PostController.index);
routes.get('/posts/:postId', PostController.show);
routes.post('/posts', PostController.create);
/*
    TODO
    return 404 to element not find
    return 400 to bad formated ID
*/
routes.delete('/posts/:postId', PostController.remove);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:categoryUrl', CategoryController.show);
routes.get('/categories/posts/:categoryUrl', CategoryController.findPostsOfCategory);
routes.post('/categories', CategoryController.create);

module.exports = routes;
