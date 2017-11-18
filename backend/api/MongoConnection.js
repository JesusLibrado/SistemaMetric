var mongoose = require('mongoose');

var _db;

module.exports = {
	connectToServer: (callback)=>{
		mongoose.connect('mongodb://35.184.229.37:27017/metric',{
			useMongoClient: true
		},(err, db)=>{
			_db = db;
			return callback(err);
		});
	},
	getDb: ()=>{
		return _db;
	},
	close: ()=>{
		_db.close();
	}

};