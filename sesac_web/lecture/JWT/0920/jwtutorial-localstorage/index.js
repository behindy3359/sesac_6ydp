const express = require('express');
const jwt =  require('jsonwebtoken');
const app = express();
const portNo = 8080;
const secretKey = 'Zr252hnKSpCrpvOzZjNmp1caIgCuQEk8';


const userInfo = {
  id : 'tutorial',
  pw : '1234',
  name : '괴물이야!',
};

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/login',(req,res)=>{
  try{
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;

    if(id===uId && pw ===uPw){
      const token = jwt.sign({id}, secretKey);
      res.json({ result: true, token});
    }else{
      res.json({ result: false, msg:'로그인 정보가 올바르지 않습니다.'});
    }
  }catch(err){
    console.log(err);
  }
})

app.get('/',(req,res)=>{
  res.render('index');
});

app.post('/token',(req,res)=>{

  if(req.headers.authorization){
    const token = req.headers.authorization.split(' ');

    try{
      const result = jwt.verify(token[1],secretKey);
      console.log(result)

      if( result.id === userInfo.id ){
        res.json({result : true, name : userInfo.name });
      }

    }catch(err){

      console.log(err);
      res.json({result : false, msg : ' 인증된 회원이 아닙니다. ' })
    }

  }else{
    res.redirect('/login');
  }
})

app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.redirect('/login');
});

app.get('/login', (req,res)=>{
  res.render('login');
});

app.listen(portNo, ()=>{
  console.log(`server start... [port : ${portNo}] [Time : ${Date()}]`);
});
