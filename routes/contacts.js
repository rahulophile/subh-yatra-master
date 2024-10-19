var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Contacts' });
});

module.exports = router;
