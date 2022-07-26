const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: isURL,
      message: 'Invalid article link.',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: isURL,
      message: 'Invalid image link.',
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
