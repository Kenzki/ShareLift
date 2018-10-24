/* GET 'home' page */
const homeList = function(req, res){
  res.render('journeys-list', {
    title: 'ShareLift - find lifts near you',
    pageHeader: {
      title: 'ShareLift',
      strapline: 'Find lifts near you!'
    },
    sidebar: {
      title: 'Lift Sharing - add or find a Journey',
      addJourney: 'Add Journey',
      findJourney: 'Find Journey',
    },

    journeys: [{
        name: 'Kenneth Malon',
        address: '1605 Park Court, Killarney, Co.Kerry',
        rating: 4,
        departure: 'Killarney',
        destination: 'Tralee',
        date: '21 October 2018',
        time: '8:00am',
    }, {
        name: 'Joe Bloggs',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        departure: 'Killarney',
        destination: 'Tralee',
        date: '21 October 2018',
        time: '8:00am',


    }]
  });
};

/* GET 'Location info' page */
const journeyInfo = function(req, res){
  res.render('journey-info', {
    title: 'Journey Details',
    pageHeader: {
      title: 'Killarney - Tralee'
    },
    journey: {
      name: 'Kenneth Malon',
      departure: 'Killarney',
      destination: 'Tralee',
      address: '1605 Park Court, Killarney, Co.Kerry',
      rating: 4,
      date: '21 October 2018',
      time: '8:00am',
      coords: {
        lat: 51.455041,
        lng: -0.9690884
      },
      descriptionText: 'I am looking for passengers for Tralee Institute of Technology. Who is willing to chip in for petrol costs.',
      contact: '0838327088',
      email: 'kennethmalon@hotmail.ie',

      feedbacks: [{
        author: 'Joe Bloggs',
        rating: 5,
        timestamp: '20 October 2018',
        feedbackText: 'Impressive driver.'
      },{
        author: 'Charlie Chaplin',
        rating: 4,
        timestamp: '21 October 2018',
        feedbackText: 'It was okay.'
      }]
    }
  });
};

/* GET 'Add review' page */
const addFeedback = function(req, res){
  res.render('journey-feedback-form', {
    title: 'Review Kenneth Malon on ShareLift',
    pageHeader: { title: 'Feedback for Kenneth Malon' }
  });
};

const addJourney = function(req, res){
    res.render('add-journey-form', {
        title: 'Add Journey',
        pageHeader: { title: 'Fill the details of your journey' }
    });
};

module.exports = {
  homeList,
  journeyInfo,
  addFeedback,
  addJourney
};