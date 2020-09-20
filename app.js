const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const mongoose = require('mongoose');

// const config = require('./config/database');

const app = express();

// mongoose.connect(config.database,{ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));

const port = 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/WeatherApp')));

const weatherCtrl = require('./controllers/weather-controller');
app.use('/api/weather', weatherCtrl);

const searchCtrl = require('./controllers/search-controller');
app.use('/api/search', searchCtrl);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/WeatherApp/index.html'));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Starting the server at port ${port}`);
});

