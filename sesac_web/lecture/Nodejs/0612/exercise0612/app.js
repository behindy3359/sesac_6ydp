const importExpress = require('express');
const app = importExpress();
app.set('view engine','ejs');
app.set('views','./views');

const portNo = 5000;

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(portNo,()=>{
    console.log(portNo+'번 포트에서 서버 실행중');
});