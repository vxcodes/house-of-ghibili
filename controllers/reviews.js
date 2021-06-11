
const Review = require('../models/review');

module.exports = {
    index,
    show,
    create,
    delete: deleteReview,
}

function index(req, res){
    Review.find({}, function(err, reviews){
        res.render('movies/index', {reviews});
    })
};

function show(req, res){
    Review.find({}, function(err, reviews){
        res.render('movies/show', {reviews, postId: req.params.id})

    });
}

function create(req, res){
    Review.create(req.body, function(err, reviews){
        console.log(req.body);
        res.render(`/movies/show/${req.params.id}}`, {reviews, postId: req.params.id})
    })
}

function deleteReview(req, res){
    Review.findByIdAndDelete(req.body, function(err, reviews){
        console.log(req.body)
        res.render(`movies/show/${req.params.id}`, {reviews, postId: req.params.id})
    })
}