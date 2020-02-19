const express = require('express');
const { multerUploads } = require('./middlewares/multer');

const routes = express.Router();

const PostController = require('./controller/PostController');
const CategoryController = require('./controller/CategoryController');
const UserController = require('./controller/UserController');
const ImageController = require('./controller/ImageController');


routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.post('/users', UserController.create);
routes.delete('/users/:userId', UserController.delete);

routes.get('/posts', PostController.index);
routes.get('/posts/:postId', PostController.show);
routes.post('/posts', PostController.create);
routes.delete('/posts/:postId', PostController.remove);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:categoryUrl', CategoryController.show);
routes.get('/categories/posts/:categoryUrl', CategoryController.findPostsOfCategory);
routes.post('/categories', CategoryController.create);

routes.post('/image', multerUploads, ImageController.upload);

module.exports = routes;
