const express = require('express');
const controller = require('../controller/mainController');
const router = express.Router();

router.get('/', controller.showIndex);

module.exports = router;
