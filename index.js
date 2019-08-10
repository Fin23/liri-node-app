//not sure if this should go in the doc.ready fn. 

const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const keys = require("./assets/javascript/keys.js");
var request = require('request');
var playlists_url =  `https://api.spotify.com/v1/users/${user_id}/playlists`;

var inquirer = require("inquirer");
var fs = require('fs');
 var axios = require("axios");

 var spotify = new Spotify(keys.spotify);
 var omdbKey = keys.omdb.api_key;

 const command = process.argv[2];
 const secondCommand = process.argv[3];

//Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

$(document).ready(function(){

   
  

console.log("hi");
    

});//end of doc.ready fn.//