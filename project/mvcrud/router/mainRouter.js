const express = require('express');
const mainController = require('../controller/mainController');
const mainRouter = express.Router();

// 404를 응답할 이외의 get 요청을 받는 경우
mainRouter.get('/signup', mainController.showSignUp);
mainRouter.get('/', mainController.showMain);

// 아이디 존재 여부 확인 요청
mainRouter.post('/membor', mainController.memberExCheck);

// 로그인 요청
mainRouter.post('/signin', mainController.memberSignIn);
// 유저정보 확인 요청, 로그인 성공시 다시 보내는 요청
mainRouter.post('/userinfo', mainController.showUserInfo);

// 으으으으으으으음!!!!!!!!!!!
mainRouter.post('/member', mainController.memberSignUp); //회원가입
mainRouter.put('/member', mainController.memberUpdate); //
mainRouter.delete('/member', mainController.memberDelete); //



module.exports = mainRouter;