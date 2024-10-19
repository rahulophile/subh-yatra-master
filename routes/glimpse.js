var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('glimpse', { title: 'Bus Routes' });
});

module.exports = router;
