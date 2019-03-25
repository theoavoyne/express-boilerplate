const express = require('express');
const path = require('path');
const hbs = require('hbs');

const homeRouter = require(path.join(__dirname, 'routes/homeRouter'));
const aboutRouter = require(path.join(__dirname, 'routes/aboutRouter'));

const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.listen(port, () => {
  console.log(`Sever is up on port ${ port }`);
});
