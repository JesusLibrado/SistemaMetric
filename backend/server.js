const express = require('express');

var mongoose = require('mongoose');
mongoose.connect('mongodb://35.184.229.37:27017/metric',{
	useMongoClient: true
} ,(err, db)=>{
	if(err) console.log(err);
	else console.log("Connection state: ", mongoose.connection.readyState);
});
var User = require('./models/user');

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

app.post('/authenticate',
  	(req, res)=>{
	  	console.log("authenticate... ");
	    User.findOne({name: req.body.user, password: req.body.password}, (err, usr)=>{
	    	console.log(usr, err);
	    	if(err) res.send(err);
	    	res.json(usr);
	    });
});

app.listen(port, ()=>{
	console.log("Backend in port: ", port);
});