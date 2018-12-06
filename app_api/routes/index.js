const express = require('express');
const router = express.Router();
const ctrlJourneys = require('../controllers/journeys');
//const ctrlFeedbacks = require('../controller/feedbacks');

//journeys
router
    .route('/journeys')
    .get(ctrlJourneys.journeysListByDistance)
    .post(ctrlJourneys.journeysCreate);

router
    .route('/journeys/:journeyid')
    .get(ctrlJourneys.journeysReadOne)
    .put(ctrlJourneys.journeysUpdateOne)
    .delete(ctrlJourneys.journeysDeleteOne);


//feedback
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