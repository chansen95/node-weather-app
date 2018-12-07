const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/bac5517da3e991289f61e781bbc2996d/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;