const {Sequelize,DataTypes} = require('sequelize');



module.exports=(sequelize,DataTypes) =>{
    const User=sequelize.define("zkusers",{
        user_address:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true,
        },
        user_characteristics_beh_df:{
            type:DataTypes.STRING,
            allowNull:false
        },password:{
            type:DataTypes.STRING,
            allowNull:false
        },

        joined_groups:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        
        
    },{timestamps:true},)
    return User
}