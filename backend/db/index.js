const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST_IP || "localhost",
    dialect: 'mysql',
    pool: {
      max: 3,
      min: 0,
      idle: 100,
      acquire: 1000000,
    },

  });
  
  sequelize.sync().then(function(){
    console.log('DB connection sucessful.');
  }, function(err){
    // catch error here
    console.log(err);
  
  });
  
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.plans = require("../model/plan.js")(sequelize, Sequelize);

module.exports = db;
