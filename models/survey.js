const Sequelize = require('sequelize');

module.exports = class Survey extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            number: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            survey: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: "survey",
            modelName: "Survey",
            paranoid: false,
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }
}