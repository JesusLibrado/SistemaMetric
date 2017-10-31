const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
	category: String,
	made: String,
	model: String,
	per_day_cost: Number,
	quantity_available: Number,
	comments: String
});

const User = mongoose.model('equipment', equipmentSchema);

module.exports = User;