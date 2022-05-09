const Flight = require("../models/flight");

function createDestination(req, res) {
 const flight = Flight.findById(req.params.id, function (e, flight) {
  flight.destinations.push(req.body);
  flight.save(function (err) {
   res.redirect(`/flights/${flight._id}`);
  });
 });
}

module.exports = { createDestination };
