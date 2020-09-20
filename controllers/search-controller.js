const express = require("express");
const router = express.Router();
const cities = require("../constants/city-list.js");

router.get("*", (req, res) => {
  const exprCountry = req.query.country;
  let filteredCountries = [];
  if (exprCountry && exprCountry.length > 0) {
    filteredCountries = cities.filter((item) =>
      item["country"].toLowerCase().startsWith(exprCountry.toLowerCase())
    );
    res.status(200).json({
      success: true,
      countries: filteredCountries,
    });
  } else {
    res.status(200).json({
      success: true,
      countries: [],
    });
  }
});

module.exports = router;
