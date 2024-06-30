const express = require( 'express' );
const mainRouter = require( '../router/mainRouter' );

exports.mainMiddleWare= ( app )=>{
  app.set( 'view engine', 'ejs' ); // EJS를 뷰 엔진으로 설정
  app.set( 'views', 'views' );   // 뷰들을 찾아 올 디렉토리 설정
  app.use( '/st' , express.static('public/css') ); // 정적 파일을 찾아 올 디렉토리 설정
  app.use( '/sc' , express.static('public/js') ); // 정적 파일을 찾아 올 디렉토리 설정
  app.use( '/im' , express.static('public/source') ); // 정적 파일을 찾아 올 디렉토리 설정
  app.use( express.urlencoded({ extended: true }) ); // body-parser 
  app.use( express.json() );
  app.use( '/', mainRouter );
}