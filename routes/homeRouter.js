const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', { title: 'HBS Boilerplate' });
});

module.exports = router;
