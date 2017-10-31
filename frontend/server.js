var express = require('express');


var port = 8125;

var app = express();

app.get('/', function(req, res) {
 res.sendfile('./public/index.html');
});

app.get('/css/main.css', function(req, res) {
 res.sendfile('./public/css/main.css');
});

app.get('/cotizaciones', function(req, res) {
 res.sendfile('./public/cotizaciones.html');
});

app.listen(port);
console.log('Frontend in: ' + port);
