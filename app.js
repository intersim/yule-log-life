const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');

const basePath = path.join(__dirname, 'public');

app.use(morgan('dev'));

app.use(compression());

app.use(express.static('public', {
  maxAge: 86400000 // one day in milliseconds
}));

app.get('/about', (req, res) => {
  res.sendFile(`${basePath}/about.html`);
});

app.use(function (req, res) {
  res.sendFile(`${basePath}/index.html`);
});

module.exports = app;
