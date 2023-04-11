// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');

// database 연결
const conn = mysql.createConnection({
  host: 'localhost', // databse 가 설치된 ip 주소
  user: 'user', // 데이터베이스 접속 계정명
  password: '1234', // 데이터베이스 접속 비번
  database: 'kdt', // 사용할 데이터베이스 이름
});

exports.post_signup = (data, callback) => {
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('post_signup', rows);
    callback(rows);
  });
};

exports.post_signin = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('post_signin', rows);
    callback(rows);
  });
};
