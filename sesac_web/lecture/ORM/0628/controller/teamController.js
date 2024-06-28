
const { Team, Player, Profile } = require('../models/index');
const { OP } = require('sequelize');

exports.getTeams = async( req, res )=>{
  try{
    const {search, sort, query} = req.query;

    let result;

    if(sort ==='name_asc'){
      result = await Team.findAll({
        attributes:['team_id','name'],
        order: [['team_id',"DESC"]]
      })

    }else if(search){
      result =await Team.findAll({
        attributes:['team_id','name'],
        where: {
          name: { [Op.like]: `%${search}%`}
        }
      })

    }else{
      result = await Team.findAll({
        attributes : ['team_id','name'],
      });
    }

    res.json(result);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

// exports.getPlayer = async (req, res) => {
//   try { 
//       console.log(req.params.player_id)
//       const { player_id } = req.params;

//       // select * from player where player_id = 1
//       const player = await Player.findOne({
//           where: { player_id }, // { player_id: player_id }
//           include: [
//               {
//                   model: Profile,
//                   attributes: ['position', 'salary']
//               }
//           ] // join 
//       });

//       res.json(player); 
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//   }
// }


exports.getTeam = async (req, res) => {
  try {
    console.log(req.param.team_id);
    const{ team_id } = req.param.team_id;
    let result = await Team.findOne({
      where:{ team_id : team_id },
      attributes:['team_id','name',"createdAt","updatedAt"],
  })

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

exports.getTeamPlayers = async (req, res) => {
  try {
      
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}