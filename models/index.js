const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const db = {};

const Survey = require('./survey');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Survey = Survey;

Survey.init(sequelize, Sequelize);

Survey.associate(db);

module.exports = db;