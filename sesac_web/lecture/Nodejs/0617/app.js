const expressM = require('express');
const app = expressM();

portNo = 8080;

app.set('view engine', 'ejs');
app.set('views','views');

app.use (expressM.urlencoded({extended:true}));
app.use (expressM.json());
app.use (expressM.static('public'));

app.get('/',(rq,rs)=>{
  rs.render('dynamic.ejs', {title : 'myname is title'});
})
app.get('/ajax', (req, res)=>{
  console.log(req.query);
  res.send(req.query);
})
app.post('/ajax', (req, res)=>{
  console.log(req.body);
  res.send(req.body);
})
app.get('/axios', (req, res)=>{
  console.log(req.query);
  res.send(req.query);
})
app.post('/axios', (req, res)=>{
  console.log(req.body);
  res.send(req.body);
})
app.get('/fetch', (req, res)=>{
  console.log(req.query);
  res.send(req.query);
})
app.post('/fetch', (req, res)=>{
  console.log(req.body);
  res.send(req.body);
})
app.listen(portNo,()=>{
  console.log(`${portNo}에서 서버를 열겠습니다. ${Date()}`);
})


