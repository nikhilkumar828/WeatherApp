const express = require("express");
const router = express.Router();
const axios = require("axios");
const weatherRecordslist = require("../models/weather");
require("dotenv").config();

router.get("*", (req, res) => {
  const ids = req.query.cities;
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${API_KEY}&units=metric`;
  axios
    .get(url)
    .then((response) => {
      res.status(200).json({
        success: true,
        report: response.data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: `Failed to load weather report. Error: ${error}`,
      });
    });
});

module.exports = router;
