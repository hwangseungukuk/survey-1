const express = require('express');

const router = express.Router();

const errorHandler = require('../middleware/errorHandler');

const surveyController = require('../controller/survey');

const getSurveyRouter = errorHandler(surveyController.getSurvey);

router.post('/', getSurveyRouter);

module.exports = router;