<<<<<<< Updated upstream
const Visitor = require('../model/Visitor');

/**controller/CVisitor.js 에 있어요!
 * res : views/index.ejs 를 돌려보냄
 */
exports.main = (req, res) => {
  res.render( 'index' );
};

/** controller/CVisitor.js 에 있어요!
 * result : model로부터 받아온 함수에 대해서 함수를 result 
 * res : views/visitor.ejs & data객체를 돌려보냄
*/
exports.getVisitors = ( req, res ) => {
  // console.log(Visitor);
  Visitor.getVisitors(( result )=>{
    // res(result) 매개변수 : model/Visitor.js의 getVisitors의 callback(rows)의 
    // "rows"변수에 대응한다!
    // console.log('controller/CVisitor.js>>',result)
    // res.render('visitor', { data: Visitor.getVisitors() });
    res.render( 'visitor', { data : result });
  });
};

/** controller/CVisitor.js 에 있어요!
 *  req.body - html 폼 요소에 입력된 값을 반환받아올 예정임
 *  result - rows.insertId
 *  res : data - result
 *  name : req.body.name
 *  comment : req.body.comment
*/
exports.postVisitor = ( req, res )=>{
  // console.log(req.body); , model/Visitor.js 를 받아온 이유
  Visitor.postVisitor( req.body, ( result )=>{
  //result : rows.insertId
  res.send({
    id: result,
    name : req.body.name,
    comment : req.body.comment,});
  });
};

/** controller/CVisitor.js 에 있어요!
 * body에 담겨서 돌아온 id
 * res : result - delete 결과를 model 에서 받아서 전달
*/ 
exports.deleteVisitor = ( req, res ) => {
  // console.log(req.body);
  Visitor.deleteVisitor( req.body.id, ( result ) => {
    // console.log('controller/CVisitor.js >> ', result);
    res.send({ result }); // { result: result }
  });
};
/**
 *  controller/CVisitor.js 에 있어요!
 *  업데이트 직전에 수정할 대상을 보여주기 위해서 한개의 데이터를 가져올 예정!
 * 
 */
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.params.id, (result) => {
    res.send(result);
  }); 
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.patchVisitor = (req,res)=>{
  console.log(req.body);
  Visitor.patchVisitor(req.body,(result)=>{
    res.send(result);
  })
}
=======
const Visitor = require('../model/Visitor');

/**controller/CVisitor.js 에 있어요!
 * res : views/index.ejs 를 돌려보냄
 */
exports.main = (req, res) => {
  res.render( 'index' );
};

/** controller/CVisitor.js 에 있어요!
 * result : model로부터 받아온 함수에 대해서 함수를 result 
 * res : views/visitor.ejs & data객체를 돌려보냄
*/
exports.getVisitors = ( req, res ) => {
  // console.log(Visitor);
  Visitor.getVisitors(( result )=>{
    // res(result) 매개변수 : model/Visitor.js의 getVisitors의 callback(rows)의 
    // "rows"변수에 대응한다!
    // console.log('controller/CVisitor.js>>',result)
    // res.render('visitor', { data: Visitor.getVisitors() });
    res.render( 'visitor', { data : result });
  });
};

/** controller/CVisitor.js 에 있어요!
 *  req.body - html 폼 요소에 입력된 값을 반환받아올 예정임
 *  result - rows.insertId
 *  res : data - result
 *  name : req.body.name
 *  comment : req.body.comment
*/
exports.postVisitor = ( req, res )=>{
  // console.log(req.body); , model/Visitor.js 를 받아온 이유
  Visitor.postVisitor( req.body, ( result )=>{
  //result : rows.insertId
  res.send({
    id: result,
    name : req.body.name,
    comment : req.body.comment,});
  });
};

/** controller/CVisitor.js 에 있어요!
 * body에 담겨서 돌아온 id
 * res : result - delete 결과를 model 에서 받아서 전달
*/ 
exports.deleteVisitor = ( req, res ) => {
  // console.log(req.body);
  Visitor.deleteVisitor( req.body.id, ( result ) => {
    // console.log('controller/CVisitor.js >> ', result);
    res.send({ result }); // { result: result }
  });
};
/**
 *  controller/CVisitor.js 에 있어요!
 *  업데이트 직전에 수정할 대상을 보여주기 위해서 한개의 데이터를 가져올 예정!
 * 
 */
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.params.id, (result) => {
    res.send(result);
  }); 
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.patchVisitor = (req,res)=>{
  console.log(req.body);
  Visitor.patchVisitor(req.body,(result)=>{
    res.send(result);
  })
}
>>>>>>> Stashed changes
