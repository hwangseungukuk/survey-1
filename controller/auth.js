const Survey = require('../models/survey');

const auth = async(req, res) => {
    try {
        await Survey.create({
            name: req.body.name,
            number: req.body.number
        });
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.status(200).json({
            message: "success"
        });
        res.end();
    } catch(err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    auth
}