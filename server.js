// Require modules
const express = require('express');

// Create the Express app
const app = express();


// Mount routes
app.get('/', function(req, res) {
  	res.send("99 Bottles of beer on the wall <a href>take one down, pass it around </a>");

});



// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
