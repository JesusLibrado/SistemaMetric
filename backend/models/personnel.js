const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnelSchema = new Schema({
    
    id: Number,
    state: String,
    specialty: String,
    comment: String,
    tariffPerDay: Number
});

const Personnel = mongoose.model('personnel', personnelSchema);

module.exports = Personnel;