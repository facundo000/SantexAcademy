const { Sequelize } = require('sequelize');

const dbInstance = new Sequelize({
  host: "localhost",
  database: "data_base",
  username: "root",
  password: "root",
  dialect: "mysql"
})
  
module.exports = { dbInstance }