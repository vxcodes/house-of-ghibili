const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/index');

router.get('/', reviewsCtrl.main);

module.exports = router;