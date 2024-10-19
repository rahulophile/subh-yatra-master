var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('events', { title: 'User Account' });
});

module.exports = router;
