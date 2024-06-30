const express = require('express');
const mainModel = require('../model/mainModel');

// get('/')
exports.showMain = (req,res)=>{
  res.render('index',{title : ' 어서오세요! 로그인 페이지 입니다.'});
}

// 사용안함
// exports.showUserInfo = (req,res)=>{
//   res.render('userinfo',{title : ' 어서오세요! 회원정보 페이지 입니다.'});
// }

//get('/signUp')
exports.showSignUp = (req,res)=>{
  res.render('signup',{title: '환영합니다! 회원가입 페이지 입니다.'});
}

//post('member')
exports.memberSignUp = (req, res) => {
  mainModel.memberSignUp(req.body, (result) => {
    res.send(result);
  });
};

// 중복확인체크 요청
exports.memberExCheck = (req, res) => {
  mainModel.memberExCheck(req.body, (result) => {
    res.send(result);
  });
};

//로그인 요청..?
exports.memberSignIn =(req, res)=>{
  mainModel.memberSignIn(req.body,(result)=>{
    res.send(result)
  })
};

//put('/member')
exports.memberUpdate =(req, res)=>{
  mainModel.memberUpdate(req.body,(result)=>{
    res.send(result)
  })
};

//delete('/member')
exports.memberDelete =(req, res)=>{
  mainModel.memberDelete(req.body,(result)=>{
    res.send(result)
  })
};

/**
 * 
 */
exports.showUserInfo = async (req, res) => {
  try {
    /**
     * uid : userid , req.body.uid || req.query.uid
     */
    const uid = req.body.uid // || req.query.uid; // POST 또는 GET 요청 처리
    const result = await mainModel.showUserInfo(uid);
    if (result) {
      res.render('userinfo', { title: '사용자 정보', user: result });
    } else {
      res.status(404).send('사용자를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('Error in showUserInfo:', error);
    res.status(500).send('서버 오류가 발생했습니다.');
  }
};