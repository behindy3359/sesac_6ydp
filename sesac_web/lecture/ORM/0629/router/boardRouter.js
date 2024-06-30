const express = require('express');
const router = express.Router();
const controller = require('../controller/boardController');

router.get('/', controller.showBoards);

router.get('/:id', controller.showBoard);
router.post('/', controller.postBoard);
router.patch('/', controller.updateBoard);
router.delete('/:id', controller.deleteBoard);

module.exports = router;