var express = require("express");
var router = express.Router();
var albums = require("../models/albumModel");

/* GET home page. */
router.get("/", function (req, res, next) {
 res.render("albums-index", { title: "Spotifie", albums: albums.albumsArray });
});
router.get("/:id", function (req, res, next) {
 let albumID = req.params.id;
 albums.albumsArray.forEach((x) => {
  if (x.id === albumID) {
   res.render("albums-show", { album: x });
   return;
  }
 });
});

module.exports = router;
