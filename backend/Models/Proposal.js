
module.exports=(sequelize,DataTypes) =>{
    const Proposal=sequelize.define("proposals",{
        proposal_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        group_proposal_statement:{
            type:DataTypes.STRING,
            allowNull:false
        },  
      
        joinedvoters:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        votedVoters:{
            type:DataTypes.ARRAY(DataTypes.STRING),

        }
        
    },{timestamps:true},)
    return Proposal
}