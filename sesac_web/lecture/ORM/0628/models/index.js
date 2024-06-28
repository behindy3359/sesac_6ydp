// 설치한 sequelize 받아옴!
const Sequelize = require('sequelize');
const playerModel = require('./player');
const profileModel = require('./profile');
const teamModel = require('./team');

// config/config.json 의 development 객체를 잡아옴!
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

//객체를 하나 만들거야! 하나씩 설정을 넣어가면서... config의 데이터를 넣어가면서 .. config 에는 객체 자체를 넣어버림 => 어떤 DB에 연결할지를 정해둠
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); //객체 완성 끝!

const PlayerModel = require('./player')(sequelize,Sequelize);
const ProfileModel = require('./profile')(sequelize,Sequelize);
const TeamModel = require('./team')(sequelize,Sequelize);

//모델간 관계 연결
// 1) player : profile  >>>  1:1 관계
// 하나의 선수당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel,{
  //cascade 옵션 : player 가 수정, 삭제되는 경우 profile 도 삭제/ 업데이트 하게!
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE',
  // profileModel 에 'profile_id' 이름의 fk 생성
  foreignKey : 'player_id',
  // playetModel 'player_id' 컬럼 참조
  sourceKey : 'player_id'
});
ProfileModel.belongsTo(PlayerModel,{
  // profileModel에 'player_id' fk 생성
  foreignKey : 'player_id',
  // 참조하게 될 playerModel의 키는 'player_id'
  targetKey : 'player_id'
});

// 2) Team : Player >>> 1 : N
// 하나의 팀에는 여러명의 선수가 존재
TeamModel.hasMany(PlayerModel,{
  // PlayerModel 에 'team_id'fk 생성
  foreignKey :'team_id',
  // TeamModel 에서 참조될 키가 'team_id'
  sourceKey: 'team_id'
});
PlayerModel.belongsTo(TeamModel,{
  // PlayerModel에 'team_id' fk 생성
  foreignKey : 'team_id',
  // 참조하게 될 TeamModel의 키는 'team_id'
  targetKey : 'team_id'
});





db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db : {sequelize : ... ,
//      Sequelzie : ... ,
//     } 
db.Player = PlayerModel;
db.Team = TeamModel;
db.Profile = ProfileModel;

//db 객체 탈출! 다른 파일에서 이 객체를 사용할거야
module.exports = db;
