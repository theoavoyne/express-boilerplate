const express = require('express');

const router = express.Router();

router.use(require('./pages'));

module.exports = router;
