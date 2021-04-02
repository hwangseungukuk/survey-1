const Sequelize = require('sequelize');

module.exports = class Survey extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            survey: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            tableName: "survey",
            modelName: "Survey",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }

    static associate (db) {
        db.Survey.belongsTo(db.User);
    }
}