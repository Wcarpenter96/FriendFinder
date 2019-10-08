const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api')

router.post('/friends', apiController.match);

router.get('/friends', apiController.friends);

module.exports = router;