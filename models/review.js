const mongoose = require('mongoose');
const Schema = mongoose.Schema; // shortcut variable

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    watchLater: {
        type: Boolean,
        default: false,
    }
},{ timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);