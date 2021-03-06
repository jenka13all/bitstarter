var express = require('express');
var fs = require('fs');

var hello_buffer = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello_buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
