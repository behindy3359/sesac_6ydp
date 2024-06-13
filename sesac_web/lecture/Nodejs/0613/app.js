const express =require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './html'); // html을 호출할 디렉토리를 설정 

const portNo = 8080;

app.get('/',(req, res)=>{
    res.render('index');
});



app.listen(portNo, ()=>{
    console.log(portNo+'번 포트에서 서버를 열겠다!');
});