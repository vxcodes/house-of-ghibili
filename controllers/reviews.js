const Review = require('../models/review');

module.exports = {
    index,
}

function index(req, res){
    Review.find({}, function(err, reviews){
        res.render('movies/index', {reviews});
    })
};