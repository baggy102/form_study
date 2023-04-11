const express = require('express');
const controller = require('../controller/Cuser'); // controller 연결
const router = express.Router();

router.get('/', controller.main); // 요청이 들어왔을 때 controller의 main 이라는 함수를 실행 시키겠다.
router.post('/practice2', controller.practice2);

module.exports = router; // 내보내기? 외부파일 app.js 불러오기 할 수 있게
