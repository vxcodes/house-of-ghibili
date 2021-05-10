const Review = require('../models/review');

module.exports = {
    main,
};

// function main(req, res){
//     Review.find({}, function(err, reviews){
//         res.render('main', {reviews});
//     })
// };


function main(req, res){
    res.render('main');
};