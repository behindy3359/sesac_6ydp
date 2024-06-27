const express = require('express');
const path = require('path');

exports.mainMiddleware=(app)=>{
  app.set('view engine', 'ejs');
  app.set('views', 'views');
  app.use(express.static((__dirname, 'public')));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
}