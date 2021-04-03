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
                   allowNull: true
            },
            survey: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            created_at: {
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