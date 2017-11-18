const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    
    id: Number,
    date : Date,
    days: Number,
    place: String,
    hidden: Boolean
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;