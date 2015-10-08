var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(JSON.stringify({[
      {name: 'Riley'},
      {name: 'Skip'},
      {name: 'Minnie'},
      {name: 'Penny'}
  ]}));
});

var server = app.listen(process.env.PORT || 3000);
