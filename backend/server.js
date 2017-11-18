const express = require('express');
var mongoose = require('mongoose');

var Connection = require("./api/MongoConnection");

Connection.connectToServer((err)=>{
	console.log("Connection state: ", mongoose.connection.readyState);
	Connection.close();
	console.log("Connection state: ", mongoose.connection.readyState);
});

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var port = 8126;

app.listen(port, ()=>{
	console.log("Backend in port: ", port);
});