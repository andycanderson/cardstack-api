var express = require('express');
var app = express();

app.get('/stack', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(JSON.stringify({ a: 1 }));
});

var server = app.listen(process.env.PORT || 3000);
