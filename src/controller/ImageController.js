const { uploader } = require('cloudinary');
const { dataUriTransform } = require('../middlewares/multer');

module.exports = {
  async upload(req, res, next) {
    if (!req.file) {
      return next({
        statusCode: 400,
        message: 'You must upload one image',
      });
    }

    const file = dataUriTransform(req).content;

    const result = await uploader.upload(file);
    const imageUrl = result.url;

    return res.json({
      message: 'Your image has been uploaded successfully to cloudinary',
      url: imageUrl,
    });
  },
};
