const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolSchema = new Schema({
	id : Number,
	category: String,
	type: String,
	brand: String,
	model: String,
	pricePerDay: Number,
	quantity: Number,
	available: Number,
	comment: String
});

const Tool = mongoose.model('tool', toolSchema);

module.exports = Tool;