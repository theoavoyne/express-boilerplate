const express = require('express');
const path = require('path');
const hbs = require('hbs');
const createError = require('http-errors');
const logger = require('morgan');

require('./config/config.js');
const webpackDevMiddleware = require('./middleware/webpackDevMiddleware');
const router = require('./controllers');

const { PORT: port, NODE_ENV: env } = process.env;

const app = express();

// WEBPACK DEV MIDDLEWARE
if (env === 'development') {
  app.use(webpackDevMiddleware);
}

// APP SETUP
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// LOAD ROUTES
app.use(router);

// HANDLE 404
app.use((req, res, next) => {
  next(createError(404));
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.locals.message = err.message || 'Internal Server Error';
  res.locals.status = status;
  res.locals.stack = env === 'development' ? err.stack : undefined;

  res.status(status);
  res.render('error');
});

// LISTENING
app.listen(port, () => {
  if (env === 'development') {
    console.log(`Sever is up on port ${port}`);
  }
});
