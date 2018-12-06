const request = require('request');

const API_KEY = 'AIzaSyB-qWzyzKwSgcvAwJHE8F3lI_WyM1O26T0'

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lomabard%20street%20philadelphia&key=' + API_KEY,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});