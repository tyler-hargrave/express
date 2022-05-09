var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var boringRouter = require("./routes/boring");

var app = express();

//Random Variables
let x = 7;
let myFavouriteFruit = "fig";
let viewCount = 0;
let leafs = [
 {
  id: "016",
  name: "Marner",
  image: "https://editorinleaf.com/wp-content/uploads/imagn-images/2018/08/17637168.jpeg",
 },
 {
  id: "034",
  name: "Matthews",
  image:
   "https://i.cbc.ca/1.6404822.1648778932!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/hkn-jets-maple-leafs-20220331.JPG",
 },
 {
  id: "091",
  name: "Tavares",
  image:
   "https://cdn.vox-cdn.com/thumbor/7Zgv8LzbPucKRTX9Ql4PqRZtqWo=/0x0:2400x3600/1200x800/filters:focal(1383x647:1767x1031)/cdn.vox-cdn.com/uploads/chorus_image/image/70768476/1181949820.0.jpg",
 },
];

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/boring", boringRouter);

app.get("/notboring", function (req, res) {
 res.render("exciting.ejs");
});
app.get("/dynamic_template_practice", function (req, res) {
 res.render("test.ejs", { x: x, favFruit: myFavouriteFruit, name: "Rogers Dad" });
});
app.get("/really_exciting", function (req, res) {
 viewCount++;
 res.render("really_exciting.ejs", { viewCount });
});
app.get("/display_my_array", function (req, res) {
 console.log(leafs);
 res.render("display_my_array.ejs", { leafs });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
 next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get("env") === "development" ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render("error");
});

module.exports = app;
