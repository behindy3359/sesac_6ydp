const express = require('express');
const jwt =  require('jsonwebtoken');
const app = express();
const portNo = 8080;
const session = require('express-session');
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

app.use(
  session({
    secret : secretKey,
    resave : false,
    saveUninitialized : false,
    cookie:{
      httpOnly : true,
      secure : false,
      maxAge : 10 * 1000,
    },
  })
)

app.post('/login',(req,res)=>{
  try{
    const {id, pw} = req.body;
    const {id:uId, pw:uPw} = userInfo;
    if(id ===uId && pw === uPw){
      const token = jwt.sign({id}, secretKey);
      req.session.user = {id, name : userInfo.name, token};
      res.json({result:true, token });
    }else{
      res.json({
        result : false,
        msg: '로그인 실패!, 올바르지 않은 정보 입니다.',
      })
    }
  }catch(err){
    console.error(err);
  }
});

app.post('/token',(req,res)=>{

});

app.get('/login',(req,res)=>{
  res.render('login');
});

app.get('/',(req,res)=>{
  if(req.session.user){
    const token = req.session.user.token;
    console.log(token);

    try{
      const result = jwt.verify(token, secretKey);
      console.log('result >>>>', result);

      if(result.id === userInfo.id){
        return res.render('index', { name : req.session.user.name });
      }
    }catch(err){
      console.error('인증된 회원이 아닙니다.', err);
    }
  }else{
    return res.redirect('/login');
  }
});

app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.redirect('/login');
});


app.listen(portNo, ()=>{
  console.log(`server start... [port : ${portNo}] [Time : ${Date()}]`);
});
