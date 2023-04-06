const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

// POST / visitor/ write
router.post('/visitor/write', controller.postVisitor); // 요청이 들어오면 controller에 postVisitor 실행 시키겠다, 하나 추가

module.exports = router;
