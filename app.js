const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');

const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(morgan('dev'));

app.use(compression());

app.use(express.static('public', {
  maxAge: 86400000 // one day in milliseconds
}));

app.use(function (req, res) {
  res.sendFile(indexPath);
});

module.exports = app;
