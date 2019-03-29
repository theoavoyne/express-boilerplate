require('./config/config.js');
const { PORT:port, NODE_ENV:env } = process.env;

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// WEBPACK DEV MIDDLEWARE
if (env === 'development') {
  app.use(require('./middleware/webpackDevMiddleware'));
};

// APP SETUP
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ROUTES
const homeRouter = require(path.join(__dirname, 'routes/homeRouter'));
const aboutRouter = require(path.join(__dirname, 'routes/aboutRouter'));

app.use('/', homeRouter);
app.use('/about', aboutRouter);

// LISTENING
app.listen(port, () => {
  console.log(`Sever is up on port ${ port }`);
});
