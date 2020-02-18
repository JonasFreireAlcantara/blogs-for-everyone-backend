const { config } = require('cloudinary');

require('dotenv').config();

const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.DATABASE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.DATABASE_CLOUDINARY_API_KEY,
    api_secret: process.env.DATABASE_CLOUDINARY_API_SECRET,
  });

  next();
};

module.exports = { cloudinaryConfig };
