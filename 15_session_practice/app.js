const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
// dotenv : 환경변순를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

dotenv.config();
console.log('dotenv >> ', process.env.SECRET_KEY);
// preocess.env.XXX

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({ 세션모듈_옵션})
// - secret : 세션을 발급할 때 사용되는 키 (임의로 변조하는 것을 방지)
// - resaver : 세션에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장할 건지
// - saveUninitialized : 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지
// - secure : https 프로토콜에서만 세션을 주고 받을 건지
app.use(
  session({
    secret: 'hello this is secret key', // 필수 옵션 (세션 암호화할 때 쓰이는 키)
    resaver: false,
    saveUninitialized: false, // 일반적으로 false 지정
  })
);

app.get('/', (req, res) => {
  res.render('index');
  /* 풀이
  // 세션 읽기 (사용)
  // user 값이 없다면 : undefined
  // user 값이 있다면 : 로그인한 아이디 값
    const userSession = req.session.user;
    console.log('userSession >>>' , userSession)
    
  // 세션이 있으면 로그인 여부(true/false)
    if(userSession !== undefined) {
      res.render('index', { isLogin: true, user: userSession})
    } else {
      res.render( 'index', { isLogin: false })
    }*/
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/logins', (req, res) => {
  res.render('logins');
});

app.post('/login', (req, res) => {
  // 세션 설정
  console.log(req.body);

  const realId = 'banana';
  const realPw = '1234';

  if (req.body.id === realId && req.body.pw === realPw) {
    // 풀이
    // req.session.user = req.body.id
    req.session.name = 'logindata';
    res.redirect('/logins');
  } else {
    res.send("<script>alert('로그인 실패');location.href='/';</script>");
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/login');
    }
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// Session

// req 객체

// req.session: "사용자" 별로 해당 객체 ({}) 안에 세션 정보 유지
// req.session.키 = 값; // 세션 쿠키 설정
// req.session.키; // 세션 쿠키 사용(읽기)
// req.session.destroy(callback); // 세션 삭제
