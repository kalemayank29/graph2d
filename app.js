 // Include the Node HTTP library
   var http = require('http');
   // Include the Express module
   var express = require('express');
   // Create an instance of Express
   var app = express();
   // Start the app
   http.createServer(app).listen(5000, function() {
     console.log('Express app started');
   });
   // A route for the home page
   app.get('/',function(req,res){
      res.send('Hi');
   });