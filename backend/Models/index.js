const {Sequelize,DataTypes} = require('sequelize');
// const sequelize = new Sequelize(`postgres://postgres:1234@localhost:5433/discover`, {dialect: "postgres"});
// const sequelize = new Sequelize('people-mgm', 'postgres', '1234', {
//     host: 'localhost', // Replace with your database host
//     dialect: 'postgres', // Specify the dialect (in this case, PostgreSQL)
//   });
const sequelize = new Sequelize( process.env.NODE_ENV=="development"?process.env.DEV_DBNAME:process.env.PROD_DBNAME,process.env.NODE_ENV=="development"?process.env.DEV_USERNAME:process.env.PROD_USERNAME, process.env.NODE_ENV=="development"?process.env.DEV_DB_PWD:process.env.PROD_DB_PWD, {
    host: process.env.NODE_ENV=="development" ? process.env.DEV_HOST : process.env.PROD_HOST, // Replace with your database host
    dialect: 'postgres', // Specify the dialect (in this case, PostgreSQL)
    dialectOptions: {
        ssl: {
          require: true,
          ca: '/path/to/ca.crt',
          rejectUnauthorized: false, 
        },
    }
  });
//   consol
console.log(process.env.NODE_ENV,process.env.PROD_HOST)
//checking if connection is done
sequelize.authenticate().then(()=>{
    console.log("Connection to DB done");
}).catch((err)=>{
    console.log('Error :-',err)
})
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users = require('./userModel') (sequelize, DataTypes);
db.relayers = require('./Relayer') (sequelize, DataTypes);
db.proposals = require('./Proposal') (sequelize, DataTypes);
db.proposalVotes = require('./ProposalVote') (sequelize, DataTypes);



//exporting the module
module.exports = db