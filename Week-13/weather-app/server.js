require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// get weather data of a city

app.get("/city", (req, res) => {
  const city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// get weather data of a city by x days
app.get("/city/days", (req, res) => {
  const city = req.body.city;
  const days = req.body.days;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=${days}&appid=${process.env.API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(4000, () => {
  console.log("listing to port 4000");
});
