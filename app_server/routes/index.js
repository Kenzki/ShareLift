const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/journeys');
const ctrlOthers = require('../controllers/others');

/* Journey pages */
router.get('/', ctrlLocations.homeList);
router.get('/journey', ctrlLocations.journeyInfo);
router.get('/journey/feedback/new', ctrlLocations.addFeedback);
router.get('/addJourney', ctrlLocations.addJourney);

/* Other pages */
router.get('/others', ctrlOthers.about);

module.exports = router;
