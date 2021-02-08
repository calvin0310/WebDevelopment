// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extensions: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                "email_address": email,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": firstName,
                    "LNAME": lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    https.get(url)
    // res.sendFile(__dirname + "/signup.html");;
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

// API Key
// a2ee4aa3014b201524222b375f4a68d6-us7

// List Id
// 8041fbe331