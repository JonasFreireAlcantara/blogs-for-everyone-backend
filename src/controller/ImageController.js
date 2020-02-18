const { uploader } = require('cloudinary');
const { dataUriTransform } = require('../middlewares/multer');

module.exports = {
  async upload(req, res) {
    if (req.file) {
      const file = dataUriTransform(req).content;

      const result = await uploader.upload(file);

      const imageUrl = result.url;

      return res.status(200).json({
        message: 'Your image has been uploaded successfully to cloudinary',
        url: imageUrl,
      });
    }

    return res.status(400).json({
      message: 'You must upload one image',
    });
  },

};
