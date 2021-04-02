const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const Survey = require('./survey');
const User = require('./user');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Survey = Survey;
db.User = User;

Survey.init(sequelize);
User.init(sequelize);

Survey.associate(db);
User.associate(db);

module.exports = db;