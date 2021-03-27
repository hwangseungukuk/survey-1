const Survey = require('../models/survey');

const getSurvey = async(req, res) => {
    const survey = req.survey;
    try {
        await Survey.create({survey: survey},
            { fields: ["survey"] });
        res.status(200);
        res.end();
    } catch(error) {
        console.error(error);
        return error;
    }
};

module.exports = {
    getSurvey
}