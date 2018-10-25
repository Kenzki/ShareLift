const mongoose = require('mongoose');
const ShareLift = mongoose.model('Journey');

const journeysCreate  = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};
const journeysReadOne = function (req, res) { };
const journeysUpdateOne = function (req, res) { };
const journeysDeleteOne = function (req, res) { };

module.exports = {
    journeysCreate,
    journeysReadOne,
    journeysUpdateOne,
    journeysDeleteOne
};
