const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  firstname: { type: String, required: true },

  lastname: { type: String, required: true },

  email: { type: String, required: true },

  image: { type: String, required: true },
});

module.exports = mongoose.model('post', postSchema) 