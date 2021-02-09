// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

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

    const jsonData = JSON.stringify(data);
    const url = "https://us7.api.mailchimp.com/3.0/lists/8041fbe331"
    const options = {
        method: "POST",
        auth: "calvin1:a2ee4aa3014b201524222b375f4a68d6-us7"
    };

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData)
    request.end();
    // res.sendFile(__dirname + "/signup.html");;
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

// API Key
// a2ee4aa3014b201524222b375f4a68d6-us7

// List Id
// 8041fbe331