const request = require('request');
/*
const yargs = require('yargs');

const geocode = require('./geocode/geocode')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
*/
// bac5517da3e991289f61e781bbc2996d

request({
    url: 'https://api.darksky.net/forecast/bac5517da3e991289f61e781bbc2996d/40.5843576,-74.6519598',
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});