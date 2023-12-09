const { sequelize } = require(".");

module.exports=(sequelize,DataTypes) =>{
    const Relayer=sequelize.define("relayers",{
        Relayer_Address:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,

        },
        Current_bal_eth:{
            type:DataTypes.STRING,
            allowNull:false
        },
     

        
        
    },{timestamps:true},)
    return Relayer
}