const mongoose = require('mongoose');
const ShareLift = mongoose.model('Journey');

const journeysCreate  = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

const journeysList = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};
const journeysReadOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

const journeysUpdateOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

const journeysDeleteOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};


module.exports = {
    journeysCreate,
    journeysList,
    journeysReadOne,
    journeysUpdateOne,
    journeysDeleteOne
};
