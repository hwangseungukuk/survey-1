require('dotenv').config();

module.exports = {
  "development": {
    "username": "freedbtech_survey",
    "password": process.env.PASSWORD,
    "database": "freedbtech_survey",
    "host": "freedb.tech",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "test": {
    "username": "freedbtech_survey",
    "password": process.env.PASSWORD,
    "database": "freedbtech_survey",
    "host": "freedb.tech",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "production": {
    "username": "freedbtech_survey",
    "password": process.env.PASSWORD,
    "database": "freedbtech_survey",
    "host": "freedb.tech",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  }
};
