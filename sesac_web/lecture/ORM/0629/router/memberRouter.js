const express = require('express');
const router = express.Router();
const controller = require('../controller/memberController');

//members page 요청
router.get('/', controller.showMember);
router.get('/list', controller.showMembers);

router.post('/check',controller.checkMember);
router.post('/',controller.signupMember);
router.patch('/', controller.updateMember);
router.delete('/:id', controller.deleteMember);
router.post('/login', controller.signinMember);

router.get('/profile/:id', controller.profile);

module.exports = router;