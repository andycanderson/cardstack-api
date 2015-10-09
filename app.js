var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(JSON.stringify([
      {
        name: 'Riley',
        age: '25',
        interests: 0,
        friends: 1,
        image: 'http://i.imgur.com/hZ3AlAn.jpg',
        actionable: true
      },
      {
        name: 'Skip',
        age: '31',
        interests: 0,
        friends: 3,
        image: 'http://i.imgur.com/AwdYxQN.png',
        actionable: true
      },
      {
        name: 'Nala',
        age: '27',
        interests: 1,
        friends: 2,
        image: 'http://i.imgur.com/tjvD7lA.jpg',
        actionable: true
      },
      {
        name: 'Penny',
        age: '35',
        interests: 0,
        friends: 1,
        image: 'http://i.imgur.com/cpsHZ22.jpg',
        actionable: true
      }
  ]));
});

var server = app.listen(process.env.PORT || 3000);
