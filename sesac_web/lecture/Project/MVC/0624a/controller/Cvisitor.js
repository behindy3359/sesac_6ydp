const Visitor = require('../model/Visitor');

exports.main = (rq,rs)=>{
  rs.render('index');
};

exports.getVisitors= (rq,rs)=>{
  console.log(Visitor.getVisitors());
  rs.render('visitor',{data : Visitor.getVisitors()});
}