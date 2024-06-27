const express = require('express');
const {postDataFDB} = require('../model/boardModel');
const {showMain,showBoard,postPosting}=require('../controller/mainController');
const router =express.Router();


router.get('/board',showBoard);
router.get('/',showMain);
router.post('/posting', postPosting);

module.exports = router;
