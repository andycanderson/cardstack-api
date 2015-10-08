var express = require('express');
var app = express();

app.get('/stack', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(JSON.stringify({ a: 1 }));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
