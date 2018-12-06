const mongoose = require('mongoose');
const ShareLift = mongoose.model('Journey');

const _buildJourneyList = function (req, res, results, stats) {
    let journeys = [];
    results.forEach((doc) =>{
        journeys.push({
        distance: doc.dis,
        name: doc.obj.name,
        address: doc.obj.address,
        rating: doc.obj.rating,
        departure: doc.obj.departure,
        destination: doc.obj.destination,
        date: doc.obj.date,
        time: doc.obj.time,
        _id: doc.obj._id

        });
    });
    return journeys;
};

const journeysListByDistance = function (req, res) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const maxDistance = parseFloat(req.query.maxDistance);
    const point = {
        type: "Point",
        coordinates: [lng, lat]
    };
    const geoOptions = {
        spherical: true,
        maxDistance: 20000,
        num: 10
    };
    if (!lng || !lat || !maxDistance) {
        console.log('locationsListByDistance missing params');
        res
            .status(404)
            .json({
                message : 'lng, lat and maxDistance query parameters are all required'
            });
        return;
    }
    ShareLift.geoNear(point, geoOptions, (err, results, stats) => {
        const journey = _buildJourneyList(req, res, results, stats);
        console.log('Geo Results', results);
        console.log('Geo stats', stats);
        res
            .status(200)
            .json(journey);
    });
};



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
    journeysListByDistance,
    journeysCreate,
    journeysReadOne,
    journeysUpdateOne,
    journeysDeleteOne,

};
