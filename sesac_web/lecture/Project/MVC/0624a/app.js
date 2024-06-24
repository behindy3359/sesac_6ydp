const express = require('express');
const app = express();
const portNo = 8080;

app.set('view engine','ejs');
app.set('/views', express.static(__dirname + 'views'));
app.set('/static', express.static(__dirname + 'static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



const indexRouter = require('./routes');
app.use('/',indexRouter);

app.get('*',(rq,rs)=>{
  rs.render('404');
})

app.listen(portNo ,()=>{
  console.log(`${portNo}에서 서버를 열었다! ${Date()}`);
})
