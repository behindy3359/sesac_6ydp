exports.getMain =(rq,rs)=>{
  rs.render('index',{
    title : '흑흑 너무 어려워요',
  })
};

exports.postSignIn = (req,res)=>{
  /** file, user 정보를 data에 담아 돌려주기 */
  const data ={
    file : req.file,
    user : req.body,
  }
  res.send(data);
}