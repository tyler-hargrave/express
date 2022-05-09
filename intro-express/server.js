// Require modules
const express = require("express");
const path = require("path");

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount middleware (app.use)

// Mount routes

app.get("/", function (req, res) {
 res.redirect("/home");
});
app.get("/home", function (req, res) {
 res.render("home");
});

// Tell the app to listen on port 4000
// for HTTP requests from clients
app.listen(4000, function () {
 console.log("Listening on port 4000");
});
