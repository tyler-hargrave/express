var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/1", function (req, res, next) {
 res.render("product", {
  img: "https://m.media-amazon.com/images/I/91VqLMN1g3L._AC_SX679_.jpg",
  title: "Baseball Glove",
  details: "Rawlings - like Kelly Gruber used to have",
  price: "$129.99",
 });
});
router.get("/2", function (req, res, next) {
 res.render("product", {
  img: "https://m.media-amazon.com/images/I/91VqLMN1g3L._AC_SX679_.jpg",
  title: "Baseball Bat",
  details: "Farsler - heard of it? ",
  price: "$19.99",
 });
});
router.get("/3", function (req, res, next) {
 res.render("product", {
  img: "https://m.media-amazon.com/images/I/71+rQfIzRDL._AC_SX679_.jpg",
  title: "Baseball Ball",
  details: "Blue Jays - Like vladdy? ",
  price: "$29.99",
 });
});
router.get("/4", function (req, res, next) {
 res.render("product", {
  img: "https://m.media-amazon.com/images/I/91-fKcXjRvL._AC_UL640_FMwebp_QL65_.jpg",
  title: "Baseball Bat Bag",
  details: "Athletico - It is a real brand.",
  price: "$89.99",
 });
});
router.get("/5", function (req, res, next) {
 res.render("product", {
  img: "https://m.media-amazon.com/images/I/61qk9JHHOGL._AC_UL640_FMwebp_QL65_.jpg",
  title: "Superman Cape",
  details: "For after the home run",
  price: "Priceless",
 });
});
module.exports = router;
