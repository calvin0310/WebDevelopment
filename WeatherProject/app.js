const express = require("express");
const https = require('https');

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=b4af9bdb065b16420607a0691bbaa340&units=metric";

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=" + icon + ">");
            res.write("<h1>The temperature in Taipei is " + temp + " degrees Celsius.</h1>");
            res.send();
        });

    });

});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
