require('dotenv').config();

module.exports = {
  "development": {
    "username": "admin",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "outsource.cycfrbihifri.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "test": {
    "username": "admin",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "outsource.cycfrbihifri.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "production": {
    "username": "admin",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "outsource.cycfrbihifri.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  }
};
