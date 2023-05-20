var express = require('express');
var app = express();
var fs = require("fs");


var player = {
  "player5" : {
      "name" : "Lebron James",
     "address" : "Ohio State",
     "sports" : "Basketball",
      "sex" : "Male",
      "id": 5
   }
}



app.get('/listPlayer', function (req, res) {
   fs.readFile( __dirname + "/" + "player.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "player.json", 'utf8', function (err, data) {
      var player = JSON.parse( data );
      var player = player["player" + req.params.id] 
      console.log( player );
      res.end( JSON.stringify(player));
   });
})


app.post('/addPlayer', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "player.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["player5"] = player["player5"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


app.delete('/deletePlayer', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "player.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["player" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "player.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["player" + req.params.id];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
