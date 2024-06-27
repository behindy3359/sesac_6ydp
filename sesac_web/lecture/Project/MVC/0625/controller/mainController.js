const {postDataFDB,writeTODB} = require('../model/boardModel');

exports.showBoard = (req,res)=>{
  postDataFDB((result)=>{
    res.render('board',{
      title : 'here is board page',
      data: result});
  })
};

exports.showMain = (req,res)=>{
  res.render('index',{title : 'here is index page'});
}

exports.postPosting = (req,res)=>{  
  console.log(req.body);
  writeTODB(req.body ,(result)=>{
    console.log('controller >>',result);
    res.send({
      title : req.body.title,
      writer : req.body.writer,
      content : req.body.content,
      time : req.body.time,
    })
  });
}