// // (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//     return [
//       { id: 1, name: '홍길동', comment: '내가 왔다.' },
//       { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };    

const mysql = require('mysql');
const conn = mysql.createConnection({
  host : 'localhost',
  user : 'user',
  password:'12345678',
  database:'codingon',
}); //database 연결 객체

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM VISITOR`, (err, rows) => {
    if(err){
      throw err;
    }
    cb(rows);
  })
}

// exports.postVisitors = (data, cb) => {
//   conn.query(`insert into visitor(name, comment) values ('${data.name}','${data.comment}')`, (err, rows) => {
//     if(err){
//       throw err;
//     }
//     cb(rows, insertId);
//   })
// }
// [before]
// (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//     return [
//       { id: 1, name: '홍길동', comment: '내가 왔다.' },
//       { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };    

// [after]


exports.postVisitor = (data, callback) => {
  conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`, 
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model/Visitor.js >> ', rows);
      callback(rows.insertId)
    }
  )
}