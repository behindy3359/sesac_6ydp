const express = require('express');
const path = require('path');

// 요청이 들어올 때 마다, 모든 요청에 대해서 미들웨어가 실행.
exports.setupMiddleware = (app)=>{
  app.use('/static', express.static('public'));
  app.use('/skipUrl', express.static('public/uploads'));
  app.use('/image', express.static(__dirname+'uploads'));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
}
