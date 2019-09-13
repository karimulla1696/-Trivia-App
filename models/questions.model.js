const mongoose = require('mongoose');

const __questionsSchema = new mongoose.Schema({
  Title: String,
  Page: Number
});

module.exports = mongoose.model('Questions', __questionsSchema);