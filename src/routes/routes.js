'use strict';
const api = require('express').Router();
const test = require('../controllers/test');

module.exports = (() => {
  api.get('/test', test.returnTest);

  return api;
})();
