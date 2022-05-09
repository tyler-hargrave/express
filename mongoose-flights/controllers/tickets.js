const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

function createTicket(req, res) {
 const ticket = new Ticket(req.body);
 ticket.save();
 console.log(req.params.id);
 Flight.findById(req.params.id, function (e, flight) {
  console.log("FLIGHT", flight);
  if (flight.tickets === null) flight.tickets = [];
  flight.tickets.push(ticket._id);
  flight.save(function (err) {
   res.redirect(`/flights/${flight._id}`);
  });
 });
}

function newTicket(req, res) {
 res.render("flights/tickets-new", { title: "New Ticket", flight: req.params.id });
}

module.exports = { createTicket, newTicket };
