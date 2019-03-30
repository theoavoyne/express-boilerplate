require('./config/config.js');
const { PORT:port, NODE_ENV:env } = process.env;

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const createError = require('http-errors');
var logger = require('morgan');

const app = express();

// WEBPACK DEV MIDDLEWARE
if (env === 'development') {
  app.use(require('./middleware/webpackDevMiddleware'));
};

// APP SETUP
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views','partials'));

// ROUTES
const router = require(path.join(__dirname, 'controllers'));
app.use(router);

// HANDLE 404
app.use((req, res, next) => {
  next(createError(404));
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.locals.message = err.message || 'Internal Server Error';
  err.status = err.status || 500;
  res.locals.error = env === 'development' ? err : {};

  res.status(err.status);
  res.render('error');
});

// LISTENING
app.listen(port, () => {
  console.log(`Sever is up on port ${ port }`);
});
