var mongoose = require('mongoose');

var _db;

module.exports = {
	connectToServer: (callback) => {
		mongoose.connect('mongodb://35.184.229.37:27017/metric',
		{ useMongoClient: true },
		(err, db) => {
			_db = db;
			var db = mongoose.connection;
			db.on('error', console.error.bind(console, 'connection error:'));
			db.once('open', function() {
	  			console.log("MongoConnection: connected!");
			});
			return callback(err);
		});
	},

	getDb: () => {
		return _db;
	},

	close: () => {
		_db.close();
	}
};