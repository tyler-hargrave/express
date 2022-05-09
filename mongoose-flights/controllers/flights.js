const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
const airlines = ["American", "Southwest", "Air Canada"];
const airports = ["Toronto", "Lindsay", "Beijing", "Sanya", "Spain"];

function createFlight(req, res) {
 if (req.body.departs === null) req.body.departs = undefined;
 const flight = new Flight(req.body);
 flight.save((e) => {
  console.log(flight);
  if (e) return res.redirect("flights/new");
  console.log("Error".flight);
  res.redirect("flights");
 });
}
const index = (req, res, next) => {
 Flight.find({}, function (e, flights) {
  res.render("flights/index", { title: "Flights", flights });
 });
};
function newFlight(req, res) {
 //Dropdowns

 //Date
 const newFlight = new Flight();
 const dt = newFlight.departs;
 const departsDate = dt.toISOString().slice(0, 16);

 res.render("flights/new", { title: "New Flight", options: { airlines, airports, departsDate } });
}

function showFlight(req, res) {
 Flight.findById(req.params.id)
  .populate("tickets")
  .exec(function (e, flight) {
   Ticket.find({ _id: { $in: flight.tickets } }, function (err, tickets) {
    res.render("flights/show", {
     title: flight.airport,
     flight,
     tickets,
     options: { airports },
    });
   });
  });
}
module.exports = { createFlight, index, newFlight, showFlight };
