// Require modules
const express = require('express');

// Create the Express app
const app = express();


// Mount routes
app.get('/', function(req, res) {
  	res.send("99 Bottles of beer on the wall <br> <a href=/98>take one down, pass it around </a>");
});

app.get('/:number_of_bottles', function(req, res) {
    let bottles = req.params.number_of_bottles;
    if(bottles <=0){
        res.send(` ${bottles} Bottles of beer left <br> <a href='/'><h1>a link to start over </h1></a>`);
    }else{
        res.send(`${bottles} The number of bottles of beer on the wall <a href='/${bottles -1}'>take one down, pass it around</a> `);
    }
    
});




// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});


