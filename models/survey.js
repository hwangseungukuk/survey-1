const Sequelize = require('sequelize');

module.exports = class Survey extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            number: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            survey: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            tableName: "survey",
            modelName: "survey",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }
}