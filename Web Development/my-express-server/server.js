// jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: s3101990@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I'm Calvin, and I'm a software engineer.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffee</li><li>Basketball</li><li>Games</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});