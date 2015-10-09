var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(JSON.stringify([
      {
        name: 'Riley',
        image: 'http://i.imgur.com/hZ3AlAn.jpg',
      },
      {
        name: 'Skip',
        image: 'http://i.imgur.com/AwdYxQN.png',
      },
      {
        name: 'Minnie',
        image: 'http://i.imgur.com/tjvD7lA.jpg',
      },
      {
        name: 'Penny',
        image: 'http://i.imgur.com/cpsHZ22.jpg'
      }
  ]));
});

var server = app.listen(process.env.PORT || 3000);
