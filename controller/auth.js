const Survey = require('../models/survey');

const auth = async(req, res) => {
    const name = JSON.stringify(req.body.name);
    const number = JSON.stringify(req.body.number);
    try {
        await Survey.create({
            name: name,
            number: number
        });
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