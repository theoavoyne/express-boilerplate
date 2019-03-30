const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', { title: 'HBS Boilerplate' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'HBS Boilerplate' });
});

module.exports = router;
