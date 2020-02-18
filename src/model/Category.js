const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
});

module.exports = mongoose.model('Category', CategorySchema);
