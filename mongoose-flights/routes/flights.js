var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);
router.post("/", flightsCtrl.createFlight);
router.get("/new", flightsCtrl.newFlight);
router.get("/:id", flightsCtrl.showFlight);

module.exports = router;
