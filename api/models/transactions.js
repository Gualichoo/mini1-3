const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  address1: {type: String, required: true},
  address2: String,
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipcode: {type: String, required: true},
  phonenumber: {type: Number, required: true},
  creditcardnumber: {type: Number, required: true},
  expirydate: {type: Number, required: true},
  cvv: {type: Number, required: true},
  billingzipcode: {type: String, required: true}
});

module.exports = mongoose.model('Transactions', transactionSchema);