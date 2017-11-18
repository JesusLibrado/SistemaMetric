const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotationRowSchema = new Schema({
    
    id: Number,
    quantity: Number,
    days: Number,
    amount: Number
});

const QuotationRow = mongoose.model('event', quotationRowSchema);

module.exports = QuotationRow;