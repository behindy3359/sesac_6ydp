//선수와 관련된 라우터를 정의하는 파일

//기본 요청경로
// localhost:port/players


const express = require('express');
const router = express.Router();
const controller = require('../controller/teamController');

router.get('/', controller.getTeams);
router.get('/:team_id', controller.getTeam);
router.get('/:team_id/players', controller.getTeamPlayers);


module.exports = router;