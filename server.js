const express = require('express');
const path = require('path');

const homeRouter = require(path.join(__dirname, 'routes/homeRouter'));

const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Sever is up on port ${port}`)
});
