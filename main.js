var keysJs = require ("./keys.js");


//node liri.js my-tweets
//This will show your last 20 tweets and when they were created at in your terminal/bash window.
var request = require('request');
var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'keysJs.consumer_key',
  consumer_secret: 'keysJs.consumer_secret',
  access_token_key: 'keysJs.access_token_key',
  access_token_secret: 'keysJs.access_token_secret'
});
var params = {screen_name: 'DevrenFreestone'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
  	console.log(error);
  }
});
// console.log(keysJs.twitterKeys.access_token_key);

//node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.



