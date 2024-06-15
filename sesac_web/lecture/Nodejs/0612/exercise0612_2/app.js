const express =require('express');
const app =express();

const portNo = 1955; // 1955 버거

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('style/style'));

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'});
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});
app.get('/create',(req,res)=>{
    res.render('create',{title:'Create'});
});
//지정된 경로외의 경로일 때!

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

app.listen(portNo,()=>{
    console.log(`http://localhost:${portNo}`);
});