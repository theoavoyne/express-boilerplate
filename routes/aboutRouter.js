const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('about', { title: 'HBS Boilerplate' });
});

module.exports = router;
