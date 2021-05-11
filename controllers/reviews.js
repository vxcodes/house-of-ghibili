const Review = require('../models/review');

module.exports = {
    index,
    show,
}

function index(req, res){
    Review.find({}, function(err, reviews){
        res.render('movies/index', {reviews});
    })
};

function show(req, res){
    Review.find({}, function(err, review){
        res.render('movies/show', {review, postId: req.params.id})

    });
}

