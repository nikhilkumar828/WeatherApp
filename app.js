const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config/database');

const app = express();

mongoose.connect(config.database,{ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const port = 5000;

app.use(cors());
// app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
// app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use(express.static(path.join(__dirname, 'dist/WeatherApp')));

const weatherCtrl = require('./controllers/weather-controller');
app.use('/api/weather', weatherCtrl);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/WeatherApp/index.html'));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Starting the server at port ${port}`);
});

