const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

// POST / visitor/ write
router.post('/visitor/write', controller.postVisitor); // 요청이 들어오면 controller에 postVisitor 실행 시키겠다, 하나 추가

// GET /visitor/get
router.get('/visitor/get', controller.getVisitor); // 하나 조회

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 수정

// DELETE/visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제

module.exports = router;
