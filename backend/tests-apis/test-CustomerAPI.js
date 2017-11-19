"use strict";

var CustomerEntity = require('../classes/CustomerEntity');
var CustomerAPI = require('../api/CustomerAPI');

var customer = new CustomerEntity();
customer.id = 1;
customer.name = "Juanito Banana";
customer.email = "jhony@banana.com";
customer.phone = 2223334455;
customer.rfc = "J_B4N4N4";
customer.type = "Gato";

// CustomerAPI.create(customer);
console.log(CustomerAPI.get());