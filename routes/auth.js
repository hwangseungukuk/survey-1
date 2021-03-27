const express = require('express');

const router = express.Router();

const errorHandler = require('../middleware/errorHandler');

const authController = require('../controller/auth');

const authRouter = errorHandler(authController.auth);

router.post('/', authRouter);

module.exports = router;