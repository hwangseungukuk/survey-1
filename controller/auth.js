const Survey = require('../models/survey');

const auth = async(req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const old = req.body.old;
    const sex = req.body.sex;
    const time = new Date();
    try {
        await Survey.create({name: name, number: number, date: time, old: old, sex: sex},
            { fields: ["name", "number", "date", "old", "sex"] });
    } catch(err) {
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
