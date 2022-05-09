const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
 {
  airport: {
   type: String,
   enum: ["Toronto", "Lindsay", "Beijing", "Sanya", "Spain"],
  },
  arrival: {
   type: Date,
  },
 },
 {
  timestamps: true,
 },
);

const flightSchema = new Schema(
 {
  airline: { type: String, enum: ["American", "Southwest", "Air Canada"] },
  airport: {
   type: String,
   enum: ["Toronto", "Lindsay", "Beijing", "Sanya", "Spain"],
   default: "Toronto",
  },
  flightNo: { type: Number, required: true, min: [10, "Too low"], max: [9999, "Too high"] },
  departs: {
   type: Date,
   default: function () {
    return Date.now() + 365 * 24 * 60 * 60 * 1000;
   },
  },
  destinations: [destinationSchema],
  tickets: {
   type: [Schema.Types.ObjectId],
  },
 },
 {
  timestamps: true,
 },
);

module.exports = mongoose.model("Flight", flightSchema);
