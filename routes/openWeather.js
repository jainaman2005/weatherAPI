const express = require('express');
const router  = express.Router();
const openWeatherControllers = require("../controller/openWeatherController.js");
router.route('/weather').get(openWeatherControllers.weather);
router.route('/airquality').get(openWeatherControllers.airQuality);
router.route('/hourly').get(openWeatherControllers.hourly);
router.route('/daily').get(openWeatherControllers.daily);
router.route('/geoencoding').get(openWeatherControllers.geoCoding);
module.exports = router;