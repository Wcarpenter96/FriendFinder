const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api')

router.post('/friends', apiController.match);

module.exports = router;