const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req, res) => {
  // console.log(Visitor);
  Visitor.getVisitors((result)=>{
    // res(result) 매개변수 : model/Visitor.js의 getVisitors의 callback(rows)의 
    // "rows"변수에 대응한다!
    // console.log('controller/CVisitor.js>>',result)
    // res.render('visitor', { data: Visitor.getVisitors() });
    res.render('visitor', { data: result });
  })
};


exports.postVisitor = ( req, res )=>{
  console.log(req.body);

  Visitor.postVisitor(req.body,(result)=>{
    //result : rows.insertId
  res.send({id: result,
    name : req.body.name,
    comment : req.body.comment,})
  });
}