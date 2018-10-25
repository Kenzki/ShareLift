const mongoose = require('mongoose');
const ShareLift = mongoose.model('Journey');

const journeysCreate  = function (req, res) {
    ShareLift.create({
        name: req.body.name,
        address: req.body.address,
        rating: req.body.rating,
        departure: req.body.departure,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time
    },(err, journey) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(journey);
        }

    });
};

const journeysList = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

const journeysReadOne = function (req, res) {
    if (req.params && req.params.journeyid) {
        ShareLift
            .findById(req.params.journeyid)
            .exec((err, journey) => {
                if (!journey) {
                    res
                        .status(404)
                        .json({
                            "message": "journeyid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(journey);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No locationid in request"
            });
    }
};



const journeysUpdateOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

const journeysDeleteOne = function (req, res) {
    const journeyid = req.params.journeyid;
    if (journeyid) {
        ShareLift
            .findByIdAndRemove(journeyid)
            .exec((err, journey) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                        return;
                    }
                    res
                        .status(204)
                        .json(null);
                }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "No journeyid"
            });
    }
};



module.exports = {
    journeysCreate,
    journeysList,
    journeysReadOne,
    journeysUpdateOne,
    journeysDeleteOne
};
