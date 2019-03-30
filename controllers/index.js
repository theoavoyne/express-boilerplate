const express = require('express');
const path = require('path');

const router = express.Router();

router.use(require('./pages'));

module.exports = router;
