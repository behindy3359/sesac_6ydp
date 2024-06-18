const expressM = require('express');
const app = expressM();

portNo = 8080;

app.set('view engine', 'ejs');
app.set('views','views');

app.use (expressM.urlencoded({extended:true}));
app.use (expressM.json());
app.use (expressM.static('public'));

app.get('/',(rq,rs)=>{
  rs.render('index.ejs', {title : 'myname is title'});
})
app.listen(portNo,()=>{
  console.log(`${portNo}에서 서버를 열겠습니다. ${Date()}`);
})


