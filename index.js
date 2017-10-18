'use strict';

const app = require('./app');

const portNum = process.env.PORT || 8080;
const server = app.listen(portNum, err => {
  if (err) throw err;
  console.log(`HTTP server patiently listening on port ${portNum}`);
});

module.exports = server;
