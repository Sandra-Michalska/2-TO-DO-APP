var express = require('express');

// make a new app
var app = express();

// specify a folder to expose to the web server
app.use(express.static('public'));

// start the server
app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});
