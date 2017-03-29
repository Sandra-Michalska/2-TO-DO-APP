// require - node's keyword, to load in the module
// takes one argument - the string, name of the module
// now we have access to the entire express API! :)))
var express = require('express');

// MAKING A NEW APP
// call the express library as a function
var app = express();

// which folder we want to surf
// to add functionality to your express app
// call express.static - to specify a folder name that we want to expose to the web server
app.use(express.static('public'));

// start the server
// app.listen takes 2 arguments: port, function to be called once the server is up
app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});
