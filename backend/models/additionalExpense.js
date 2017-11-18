const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionalExpenseSchema = new Schema({
    description: String,
    price: Number,
    comment: String
});

const AdditionalExpense = mongoose.model('additionalExpense', additionalExpenseSchema);

module.exports = AdditionalExpense;