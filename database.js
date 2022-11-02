const {Sequelize}  = require('sequelize');
require('dotenv').config()
const db = new Sequelize({
  
  host: "localhost",
  //port: 5432,
  username: "postgres",
  password: "postgres",
  database: "seqdbpagination",
  dialect:"postgres"
  
});

module.exports = db ;