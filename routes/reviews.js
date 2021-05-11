const express = require('express');
const router = express.Router();
const reveiwsCtrl = require('../controllers/reviews');

router.get('/index', reveiwsCtrl.index);

module.exports = router;

