const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    id: Number,
    email: String,
    type: String,
    name: String,
    rfc: String,
    phone: Number
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;