const mongoose = require('mongoose');

const feedBackSchema = new mongoose.Schema({
   author: String,
   rating:{
       type: Number,
       'default': 0,
       min: 0,
       max: 5
   },
   feedbackText:String,
   createOn: {type: Date, default:Date.now}
});

const journeySchema = new mongoose.Schema({
   name: String,
   departure: String,
   destination: String,
   address: String,
    rating:{
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    date: String,
    time: String,
    coords: {
       type: [Number],
       index: '2dsphere'
    },
    descriptionText: String,
    contact: String,
    email: String,
    feedbacks: [feedBackSchema]
});

mongoose.model('Journey', journeySchema);






