const express =require('express');

exports.etcMiddle=(app)=>{
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  app.set('view engine','ejs');
  app.set('views', 'views');
  app.use('/public',express.static('public'));
}