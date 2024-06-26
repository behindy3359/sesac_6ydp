const express = require( 'express' );
const controller = require( '../controller/CVisitor' );
const router = express.Router();

// 페이지에 입장했을 때, /localhost:portNo/ 작동
router.get( '/', controller.main );

// GET /visitors => localhost:PORT/visitors
router.get( '/visitors', controller.getVisitors ); // 전체 조회

router.post( '/visitor', controller.postVisitor );

//한개의 데이터 조회!
router.get('/visitor/:id', controller.getVisitor );

router.delete( '/visitor', controller.deleteVisitor );

router.patch('/visitor',controller.patchVisitor );

module.exports = router;

