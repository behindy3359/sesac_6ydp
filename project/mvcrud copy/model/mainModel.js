const mysql =require('mysql2');
/**
 * DB 연결객체 
 */
// //at home
// const conn = mysql.createConnection({
//   host : 'localhost',
//   user : 'user',
//   password : '12345678',
//   database : 'codingon'
// });

// at SeSAC
const conn = mysql.createConnection({
  host : 'localhost',
  user : 'user',
  password : '12345678',
  database : 'codingon'
});


/**
 * 아이디 중복체크를 위한 구문 /// 하지말걸 그랬어
 * @param { } id  id를 받아와서 검사를 실행. DB에서 일치하는 항목이 존재하는지 여부 검사 
 * 아우!
 */
function checkid(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM member WHERE userid = ?`;
    conn.query(sql,[id], (err, rows) => {
      if (err) {
        console.error('Error: from checkid() >> model/mainModel', err);
        return reject(err);
      }
      const exists = rows.length === 1;
      resolve(exists);
    });
  });
}

//
function signUp(data) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO member (userid, username, userpassword, singuptime) VALUES (?, ?, ?, ?)`;
    conn.query(sql, [data.uid, data.uname, data.upw, data.time], (err, rows) => {
    if (err) {
      console.error('Error: from  signUp() >> model/mainModel', err);
      return reject(err);
    }else {
      resolve(true);
    }
  });
});  
}

// //사용 안함
// function getid(data){
//   return new Promise((resolve, reject) => {
//     const sql = `select * from member where id = ?`;
//     conn.query(sql, [data.uid], (err, rows) => {
//     if (err) {
//       console.error('Error: from getid() >> model/mainModel', err);
//       return reject(err);
//     }else {
//       resolve(rows.id);
//     }
//   });
// }); 
// }

function signInF(data){
  return new Promise((resolve, reject) => {
    const sql = `select * from member where userid=? and userpassword = ?`;
    conn.query(sql, [data.uid, data.upw], (err, rows) => {
    if (err) {
      console.error('Error: from signInF() >> model/mainModel', err);
      return reject(err);
    }else {
      resolve(rows);
    }
  });
}); 
}

/**
 * model/mainModel >>memberSignUp() 회원가입하는 구문, 
 * 
 */
exports.memberSignUp = async (data, callback) => {
  try {
    // 아이디가 존재하는지 확인
    const userExists = await checkid(data.uid);
    if (!userExists) {  // 사용자가 존재하지 않을 때
      const signUpResult = await signUp(data);
      console.log(`model/mainModel >> memberSignUp() 실행, 회원가입 성공, TIME: ${new Date()}`);
      callback(true);  // 회원가입 성공
    } else {
      console.log(`model/mainModel >> memberSignUp() 실행, 회원가입 실패 (이미 존재하는 아이디), TIME: ${new Date()}`);
      callback(false);  // 이미 존재하는 아이디라 회원가입 실패
    }
  } catch (error) {
    console.error(`model/mainModel >> memberSignUp() 실행 중 오류 발생, TIME: ${new Date()}`, error);
    callback(false);  // 오류 발생으로 회원가입 실패
  }
};

exports.memberExCheck = async (data, callback) => {
  try {
    const idExists = await checkid(data.uid);
    if (idExists) {
      callback(false);
    } else {
      callback(true);
    }
  } catch (error) {
    callback(false);
  }
};

/**
 * memberignIn
 */
exports.memberSignIn = async (data, callback) => {
  try {
    // 1. 아이디 존재 여부 확인
    const idExists = await checkid(data.uid);

    if (!idExists) {
      console.log(`model/mainModel >> memberSignIn() 실행, 존재하지 않는 아이디, target: ${data.uid} TIME: ${new Date()}`);
      callback({
        uid: data.uid,
        result: 2, // 존재하지 않는 아이디
      });
      return;
    }
    // 2. 아이디와 비밀번호 일치 여부 확인
    const rows = await signInF(data);
    if (rows.length === 1) {
      console.log(`model/mainModel >> memberSignIn() 실행, 로그인 성공, target: ${data.uid} TIME: ${new Date()}`);
      callback({
        uid: rows[0].id,
        result: 1, // 로그인 성공
      });
    } else {
      console.log(`model/mainModel >> memberSignIn() 실행, 비밀번호 일치하지 않음, target: ${data.uid} TIME: ${new Date()}`);
      callback({
        uid: data.uid,
        result: 3, // 비밀번호 불일치
      });
    }
  } catch (error) {
    console.error(`model/mainModel >> memberSignIn() 실행 중 오류 발생, TIME: ${new Date()}`, error);
    callback(false);
  }
};

exports.showUserInfo = ( userId ) => {
  return new Promise(( resolve, reject ) => {
    const sql = 'SELECT * FROM member WHERE id = ?';
    conn.query(sql, [userId], (err, rows) => {
      if (err) {
        console.error('Error : from showUserInfo() >> model/mainModel', err);
        return reject(err);
      }
      if (rows.length === 0) {
        return resolve(null);
      }
      resolve(rows[0]);
    });
  });
};

/**
 * 
 * 변경할데이터 받아서 업데이트!
 * @param {*} data 
 * @param {*} callback 응답결과/callback 에 true, falsee 돌려주기
 */
exports.memberUpdate = (data, callback) => {
  const sql = `UPDATE member SET username=?, userpassword=? WHERE userid=?`;
  conn.query(sql, [data.uname, data.upw, data.uid], (err, result) => {
    if (err) {
      console.error('Error: from memberUpdate() >> model/mainModel', err);
      callback(false);
      return;
    }
    callback(true);
  });
};

/**
 * 
 * 삭제할 데이터 찾아서 삭제!
 * @param {*} data 
 * @param {*} callback 응답결과/callback 에 true, falsee 돌려주기
 */
exports.memberDelete = (data, callback) => {
  const sql = `Delete from member WHERE userid=?`;
  conn.query(sql, [data.uid], (err, result) => {
    if (err) {
      console.error('Error: from memberUpdate() >> model/mainModel', err);
      callback(false);
      return;
    }
    callback(true);
  });
};