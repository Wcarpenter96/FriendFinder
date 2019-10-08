const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api')

router.post('/match', apiController.match);

router.get('/friends', apiController.friends);

module.exports = router;