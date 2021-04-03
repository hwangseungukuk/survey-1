require('dotenv').config();

module.exports = {
  "development": {
    "username": "sql6403134",
    "password": process.env.PASSWORD,
    "database": "sql6403134",
    "host": "sql6.freemysqlhosting.net",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "test": {
    "username": "sql6403134",
    "password": process.env.PASSWORD,
    "database": "sql6403134",
    "host": "sql6.freemysqlhosting.net",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "production": {
    "username": "sql6403134",
    "password": process.env.PASSWORD,
    "database": "sql6403134",
    "host": "sql6.freemysqlhosting.net",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  }
};
