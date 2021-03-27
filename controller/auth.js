const Survey = require('../models/survey');

const auth = async(req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    try {
        await Survey.create({
            name: name,
            number: number
        });
        console.log(name);
    } catch(err) {
        console.log(name);
        console.error(err);
        res.status(400).json({
            message: "Failed"
        });
        return err;
    }
    res.status(200).json({
        message: "success"
    });
}

module.exports = {
    auth
}