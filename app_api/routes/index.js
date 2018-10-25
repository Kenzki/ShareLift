const express = require('express');
const router = express.Router();
const ctrlJourneys = require('../controllers/journeys');
//const ctrlFeedbacks = require('../controller/feedbacks');

//journey
router
    .route('/journeys')
    .get(ctrlJourneys.journeysCreate);

router
    .route('journeys/:journeyid')
    .get(ctrlJourneys.journeysReadOne)
    .put(ctrlJourneys.journeysUpdateOne)
    .delete(ctrlJourneys.journeysDeleteOne);

//review
//router
    //.route('/journeys/:journeysid/feedbacks')
   // .post(ctrlFeedbacks.feedbacksCreate);

//router
   // .route('journeys/:journeyid/feedbacks/:reviewid')
    //.get(ctrlFeedbacks.feedbacksReadOne)
    //.put(ctrlFeedbacks.feedbacksUpdateOne)
   // .delete(ctrlFeedbacks.feedbacksDeleteOne);

//addJourney

module.exports = router;