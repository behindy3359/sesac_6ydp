// playerModel 정의,, 테이블을 정의한것과 비슷해!

const playerModel = ( sequelize, DataTypes ) => {
  
  //sequelize 매개변수 : models/index.js 에서의 sequelize (db연결 정보를 입력하여 생성한 객체)
  //DataTypes : models/index.js 에서의 Sequelize Sequelize 패키지 자체를 의미함

  //define   
  const Player = sequelize.define(
    //param1 : model 이름
    'Player',
    //param2 : 모델 컬럼 정의
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    //param3 : 모델 옵션 정의
    { 
      freezeTableName: true,
      // timestamps: false, //데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
    }
  );
  return Player;
};

module.exports = playerModel;