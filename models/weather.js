
//Require mongoose package
const mongoose = require('mongoose');

const WeatherRecordSchema = mongoose.Schema({
    id: {
        type: Number
    }
});
const WeatherList = module.exports = mongoose.model('WeatherRecord', WeatherRecordSchema );


module.exports.getAllRecords = (callback) => {
    PostList.find(callback);
}

module.exports.addRecord = (newList, callback) => {
	newList.save(callback);
}
