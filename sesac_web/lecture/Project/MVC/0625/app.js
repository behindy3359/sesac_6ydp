const express= require('express');
const router = require('./router/mainRouter');
const {mainMiddleware} = require('./middleware/mainMiddleware');
const app = express();
const portNo = 8080;

// app.set('partials',express.);

mainMiddleware(app);

app.use('/', router);

app.get('*',(req,res)=>{
  res.render('404',{title: 'ouch! U meet wall _ 404 not found'});
})

app.listen(portNo ,()=>{
  console.log(`${portNo}에서 서버 열림!${Date()}`);
})