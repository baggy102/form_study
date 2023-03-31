const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs'); //view engine 등고
app.use('/views', express.static(__dirname + '/views')); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우팅(routing) : 경로설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!

// localhost:PORT/ 접속했을 떄, index.ejs를 보여주겠다.
app.get('/', function (req, res) {
  // , (req,res) => {}
  // views/index.ejs 파일을 찾아서 응답
  const myTitle = '폼 실습을 합시다~~~~';
  res.render('index', { title: myTitle });
});

app.get('/result1', function (req, res) {
  console.log(req.query);
  res.render('result1', {
    title: 'GET 요청 폼 결과 확인하기',
    name: req.query.name,
    gender: req.query.gender,
    birthYear: req.query.birthYear,
    birthMonth: req.query.birthMonth,
    birthDay: req.query.birthDay,
    hobby: req.query.hobby,
  });
});

app.post('/result2', function (req, res) {
  console.log(req.body);
  res.render('result2', {
    title: 'POST 요청 폼 결과 확인하기',
    name: req.body.name,
    gender: req.body.gender,
    birthYear: req.body.birthYear,
    birthMonth: req.body.birthMonth,
    birthDay: req.body.birthDay,
    hobby: req.body.hobby,
    color: req.body.color,
    number: req.body.number,
  });
});

app.listen(PORT, function () {
  console.log('웹 서버 실행');
  console.log(`http://localhost:${PORT}`);
});
