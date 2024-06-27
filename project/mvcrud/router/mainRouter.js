const express = require('express');
const mainController = require('../controller/mainController');
const mainRouter = express.Router();

// 기존 라우트 유지
mainRouter.get('/userinfo/:id', mainController.showUserInfo);
mainRouter.get('/signup', mainController.showSignUp);
mainRouter.get('/', mainController.showMain);
mainRouter.post('/membor', mainController.memberExCheck);

mainRouter.post('/member', mainController.memberSignUp);
mainRouter.put('/member', mainController.memberUpdate);
mainRouter.delete('/member', mainController.memberDelete);
mainRouter.post('/signin', mainController.memberSignIn);



module.exports = mainRouter;