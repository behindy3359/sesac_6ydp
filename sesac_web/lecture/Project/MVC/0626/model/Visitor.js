const mysql = require('mysql');
const conn = mysql.createConnection({
  host : 'localhost',
  user : 'user',
  password : '12345678',
  database : 'codingon',
}); //database 연결 객체

/** model/Visitor.js -  getVisitor
 * DB에서 데이터를 조회하는 구문 - `SELECT * FROM VISITOR`
 * 각 rows를 반환
 * `model/Visitor.js 에서 getVisitors() : 데이저 조회됨, time : ${ 실행시점의 시간 }`
 */
exports.getVisitors = ( cb ) => {
  conn.query(`SELECT * FROM VISITOR`, ( err, rows ) => {
    if( err ){
      throw err;
    }
    console.log(`model/Visitor.js >> getVisitors() : 데이저 조회됨, time : ${ Date() }`);
    cb( rows );
})};

/** model/Visitor.js -  postVisitor, insert 구문
 * DB에 데이터를 삽입하는 구문 : `insert into visitor(name, comment) values ('${ data.name }','${ data.comment }'
 * @param { object } data - 삽입할 데이터
 * @param { callback } callback - 동적으로 페이지에 라인을 추가하기 위한 callback 구문
 * 결과 출력 : `model/Visitor.js 에서 postVisitors() : 데이저 추가됨, time : ${ Date() }`
 */
exports.postVisitor = ( data, callback ) => {
  conn.query(`insert into visitor(name, comment) values ('${ data.name }','${ data.comment }')`, 
    ( err, rows ) => {
      if ( err ) {
        throw err;
      }
      // console.log('model/Visitor.js >> ', rows);
    console.log(`model/Visitor.js >> postVisitors() : 데이저 추가됨, time : ${ Date() }`);
    callback( rows.insertId );
})};

/**
 * model/Visitor.js - deleteVisitor, delete 구문
 * DB에서 데이터를 삭제하는 구문 : `delete from visitor where id = ${ targetId }`
 * @param { id , number } targetId - 삭제할 데이터의 id
 * @param { callback } callback - 동적으로 페이지에 게시글을 삭제하기 위한 callback 구문
 * 결과 출력 : `model/Visitor.js 에서 deleteVisitors() : 데이저 삭제됨, target: ${ targetId } time : ${ Date() }`
 */
exports.deleteVisitor = ( targetId, callback )=>{
  conn.query(`delete from visitor where id = ${ targetId }`,
    ( err, rows )=>{
      if( err ){
        throw err;
      }
    // console.log('model/Visitor.js >>', rows);
    console.log(`model/Visitor.js >> deleteVisitors() : 데이저 삭제됨, target: ${ targetId } time : ${ Date() }`);
    callback( true );
})};


/**
 * model/Visitor.js - deleteVisitor, delete 구문
 * @param {id , number } targetId 
 * @param {callback} callback 
 */
exports.getVisitor = (targetId, callback)=>{
  conn.query(`select * from visitor where id=${targetId}`,(err,rows)=>{
    if(err){
      throw err;
    }
    console.log(`model/Visitor.js >> getVisitor() : 수정을 위한 데이저 조회됨, target: ${ targetId } time : ${ Date() }`);
    callback(rows[0])  
  })
}

/**
 * 
 * @param {*} updateData 
 * @param {*} callback 
 */
exports.patchVisitor = (updateData, callback)=>{
  const {id, name,comment} = updateData;
  conn.query(`UPDATE visitor SET name='${name}', comment='${comment}' WHERE id=${id}`,(err, rows)=>{
    if(err){
      throw err;
    }
    console.log(`model/Visitor.js >> patchVisitor() : 수정 완료, target: ${ id } time : ${ Date() }`);
    callback(true);
  })
}