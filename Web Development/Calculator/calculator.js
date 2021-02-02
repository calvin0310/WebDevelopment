// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extensions: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
    res.send("Thanks for posting that!");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});