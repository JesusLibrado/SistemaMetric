const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotationSchema = new Schema({
    
    id: Number,
    date: Date,
    isFinal: Boolean,
    subtotal: Number,
    revenueFactor: Number,
    iva: Number,
    discount: Number,
    total: Number,
    metricPlus: String
});

const Quotation = mongoose.model('event', quotationSchema);

module.exports = Quotation;