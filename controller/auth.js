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
        res.status(200).json({
            message: "success"
        });
        res.end();
    } catch(err) {
        console.log(name);
        console.error(err);
        return err;
    }
}

module.exports = {
    auth
}