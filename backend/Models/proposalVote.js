const { sequelize } = require(".");

module.exports=(sequelize,DataTypes) =>{
    const ProposalVote=sequelize.define("proposalvotes",{
        
voted_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,

        },
        voted_to :{
            type:DataTypes.STRING,
            allowNull:false
        },
        zk_proof_submitted:{
            type:DataTypes.STRING,
            allowNull:false
        },
        voted_by:{
            type:DataTypes.STRING,
            allowNull:false
        },

        
        
    },{timestamps:true},)
    return ProposalVote
}