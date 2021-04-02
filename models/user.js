const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            number: {
                type: Sequelize.STRING(30),
                   allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            tableName: "user",
            modelName: "User",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }

    static associate(db) {
        db.User.hasOne(db.Survey, { foreignKey: "id"});
    }
}