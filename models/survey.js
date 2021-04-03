const Sequelize = require('sequelize');

module.exports = class Survey extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            number: {
                type: Sequelize.STRING(255),
                   allowNull: true
            },
            suvey: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            date: {
                type: Sequelize.DATE(6),
                allowNull: false,
                defaultValue: Sequelize.NOW
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