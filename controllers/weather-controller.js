//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const weatherRecordslist = require('../models/weather');

router.get('*',(req,res) => {
});

module.exports = router;