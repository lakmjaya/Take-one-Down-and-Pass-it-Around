// Require modules
const express = require('express');

// Create the Express app
const app = express();


// Mount routes
app.get('/', function(req, res) {
  	res.send("99 Bottles of beer on the wall <br> <a href=/98>take one down, pass it around </a>");
});

app.get('/:number_of_bottles', function(req, res) {
    res.send(req.params.number_of_bottles + " The number of bottles of beer on the wall <a href=/(req.params.number_of_bottles-1)>take one down, pass it around</a> " );
});
app.get('/:0', function(req, res) {
    res.send("99 Bottles of beer on the wall <br> <a href=/><h1>a link to start over </h1></a>");
});


// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
