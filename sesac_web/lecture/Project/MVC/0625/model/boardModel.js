const mysql = require('mysql2');
/** 데이터베이스 연결 객체! */
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '12345678',
  database: 'codingon'
});

exports.postDataFDB = (cb)=>{
  conn.query(`select * from board limit 10`,( err, rows )=>{
    if(err){
      throw err;
    }
    cb(rows);
  })
};


exports.writeTODB = (data, cb) => {
  const sql = `INSERT INTO board (postwriter, posttitle, postcontent, posttime) VALUES (?, ?, ?, ?)`;
  // 시간 데이터를 MySQL 형식에 맞게 처리
  const values = [data.writer, data.title, data.content, data.time];

  conn.query(sql, values, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    cb(rows);
  });
};
