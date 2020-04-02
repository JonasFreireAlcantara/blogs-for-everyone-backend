const express = require('express');
const { multerUploads } = require('./middlewares/multer');
const CategoryValidations = require('./middlewares/validations/CategoryValidations');

const routes = express.Router();

const PostController = require('./controller/PostController');
const CategoryController = require('./controller/CategoryController');
const ImageController = require('./controller/ImageController');

routes.get('/posts', PostController.index);
routes.get('/posts/:postId', PostController.show);
routes.post('/posts', PostController.create);
routes.delete('/posts/:postId', PostController.remove);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:categoryUrl', CategoryController.show);
routes.get('/categories/posts/:categoryUrl', CategoryController.findPostsOfCategory);
routes.post('/categories', CategoryValidations.create, CategoryController.create);

routes.post('/image', multerUploads, ImageController.upload);

module.exports = routes;
