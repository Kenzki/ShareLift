const express = require('express');
const router = express.Router();
const ctrlJourneys = require('../controllers/journeys');
const ctrlOthers = require('../controllers/others');

/* Journey pages */
router.get('/', ctrlJourneys.homeList);
router.get('/journey', ctrlJourneys.journeyInfo);
router.get('/journey/feedback/new', ctrlJourneys.addFeedback);
router.get('/addJourney', ctrlJourneys.addJourney);

/* Other pages */
router.get('/others', ctrlOthers.about);

module.exports = router;
