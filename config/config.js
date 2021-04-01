require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "sql211.utae.co.kr",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "test": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "sql211.utae.co.kr",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "production": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "outsource",
    "host": "sql211.utae.co.kr",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  }
};
