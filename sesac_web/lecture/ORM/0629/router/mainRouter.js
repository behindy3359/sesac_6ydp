const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController');

router.get('/', controller.showMain);

router.get('/logout', controller.logout);


module.exports = router;