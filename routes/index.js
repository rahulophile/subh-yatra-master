var express = require('express');
var router = express.Router();
var routeService = require('../services/routeService');

/* GET home page. */
router.get('/', function(req, res, next) {
  const routes = routeService.getRouteData();

  let totalBuses = 0;
  let totalDelay = 0;
  let onTimeBuses = 0;
  let delayedBuses = 0;

  routes.forEach(route => {
    route.buses.forEach(bus => {
      totalBuses++;
      totalDelay += bus.delay;
      if (bus.status === 'On Time') {
        onTimeBuses++;
      } else {
        delayedBuses++;
      }
    });
  });

  const avgDelay = totalBuses > 0 ? Math.round(totalDelay / totalBuses) : 0;

  res.render('index', { 
    title: 'Subh Yatra - Home',
    totalBuses,
    avgDelay,
    onTimeBuses,
    delayedBuses
  });
});

module.exports = router;
