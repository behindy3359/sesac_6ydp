const express = require('express');
const app = express();
const portNo = 5555;

let titleText='제제목목';

app.set('view engine', 'ejs');
app.set('views', './views'); // 목표 디렉토리 지정, 디렉토리 내에서 (.ejs)파일을 찾아 줄 에정!

// index.ejs로!!
app.get('/',(req,res)=>{
    console.log(req);
    res.render('index',{title :`${titleText}님의 집`});
});

// about.ejs로!!
app.get('/about',(req,res)=>{
    res.render('about',{title :`${titleText}님의 집`});    
})

// create.ejs로!!
app.get('/create',(req,res)=>{
    res.render('create',{title :`${titleText}님의 집`});    
})

app.listen(portNo, ()=>{
    console.log(portNo + '번에서 서버 실행중!');
});