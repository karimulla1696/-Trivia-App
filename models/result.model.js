const mongoose = require('mongoose');

const __answerSchema = new mongoose.Schema({
    Question: String,
    Answer: String
});

const __resultSchema = new mongoose.Schema({
    Name: String,
    Answers: [__answerSchema]
});

module.exports = mongoose.model('Results', __resultSchema);