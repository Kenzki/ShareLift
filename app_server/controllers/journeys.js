/*Tried doing calling API from an express application

const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
};
const homeList = function(req, res){
    const path = '/api/journeys';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : {
            lng : -0.9690884,
            lat : 51.455041,
            maxDistance : 200

        }
    };
    request(requestOptions, (err, response, body) => {
            let data = body;
            if (response.statusCode === 200 && data.length) {
                for (let i = 0; i < data.length; i++) {
                    data[i].distance = _formatDistance(data[i].distance);
                }
            }
            _renderHomepage(req, res,data);
        }
    );
};

const _formatDistance = function (distance) {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
};

const _renderHomepage = function(req, res, responseBody){
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }

    res.render('journeys-list', {
        title: 'ShareLift - Find lifts near you!',
        pageHeader: {
            title: 'ShareLift',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: {
            title: 'Lift Sharing - add or find a Journey',
            addJourney: 'Add Journey',
            findJourney: 'Find Journey',
        },
        locations: responseBody,
        message: message
    });
};*/

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
            address: '125 High Street, Killarney, Co,Kerry',
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