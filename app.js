const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');

const authRouter = require('./routes/auth');
const surveyRouter = require('./routes/survey');

const app = express();

app.set('port', process.env.PORT || 8080);

sequelize.sync({ force: false })
    .then(() => console.log('데이터 베이스 연결 성공'))
    .catch(console.error);

    if(process.env.NODE_ENV === 'production') {
        app.use(morgan('dev'));
    } else {
        app.use(morgan('dev'));
    }

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/survey', surveyRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: "NOT FOUND" });
    next(err);
});

app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
});

module.exports = app;