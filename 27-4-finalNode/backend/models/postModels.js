const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  firstName: { type: String, required: true },

  lastName: { type: String, required: true },

  date: { type: String, required: true },

  image: { type: String, required: true },
});

module.exports = mongoose.model('post' , postSchema) ;