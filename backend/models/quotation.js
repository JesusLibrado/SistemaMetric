const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotationSchema = new Schema({
    id: Number,
    date: Date,
    client: String,
    subotal: Number
});

const Quotation = mongoose.model('quotation', quotationSchema);

module.exports = Quotation;