const mongoose = require('mongoose');
const Schema = mongoose.Schema; // shortcut variable

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
},{ timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);