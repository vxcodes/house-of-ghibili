const express = require('express');
const router = express.Router();
const reveiwsCtrl = require('../controllers/reviews');

router.get('/index', reveiwsCtrl.index);
router.get('/show/:id', reveiwsCtrl.show);
router.post(':id', reveiwsCtrl.create);
router.delete(':id', reveiwsCtrl.delete)

module.exports = router;