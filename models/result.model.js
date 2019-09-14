const mongoose = require('mongoose');

// creating mongoose schema
const __resultSchema = new mongoose.Schema({
    Name: String,
    Q1: String,
    A1: String,
    Q2: String,
    A2: String,
    CreatedDate: { type: Date, default: Date.now() }
});

// exporting model
module.exports = mongoose.model('Results', __resultSchema);