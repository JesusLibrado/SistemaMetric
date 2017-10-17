var express = require('express');


var port = 8125;

var app = express();

app.get('/', function(req, res) {
 res.sendfile('./public/index.html');
});

app.listen(port);
console.log('Frontend in: ' + port);
