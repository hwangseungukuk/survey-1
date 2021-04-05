const Survey = require('../models/survey');

const getSurvey = async(req, res) => {
    const survey = req.body.survey;
    try {
        await Survey.update({survey: survey},
            { where: { name: req.body.name },
                fields: ["survey"] });
        console.log(survey);
    } catch(error) {
        console.log(survey);
        console.error(error);
        res.status(400).json({
            message: "Failed"
        });
        return error;
    }
    res.status(200).json({
        message: "success"
    });
};

module.exports = {
    getSurvey
} 