const {Sequelize}= require('sequelize')

const db = require('../database');
const student =db.define('Student', {
   
    id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,

    },
    firstName:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName:true,
    timestamps:false,
})


module.exports = student