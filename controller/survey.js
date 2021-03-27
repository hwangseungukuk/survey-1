const Survey = require('../models/survey');

const getSurvey = async(req, res) => {
    try {
        await Survey.create({
            survey: req.body.survey,
        });
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