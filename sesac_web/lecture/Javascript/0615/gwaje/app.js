const express = require('express');
const app = express();
portNo = 8080;

app.set('view engine','ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended : true})); 
app.use(express.json()); 

app.get('/',(req,res)=>{
  res.render('index');
})
app.get('/getForm',(req,res)=>{
  res.render('result',{
    userInfo : req.query,
  });
})
app.post('/postForm',(req,res)=>{
  res.render('result',{
    userInfo : req.body,
  })
})


app.listen(portNo, ()=>{
  console.log(`${portNo} 에서 서버를 열었다! +${Date()}`);
});