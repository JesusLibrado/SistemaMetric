"use strict";

var CustomerEntity = require('../classes/CustomerEntity');
var Customer  = require('../models/Customer');
var mongoConnection = require( './MongoConnection' );

module.exports = {

    create(customerInstance) {
        var customer = new Customer();
        customer.id = customerInstance.id;
        customer.email = customerInstance.email;
        customer.type = customerInstance.type;
        customer.name = customerInstance.name;
        customer.rfc = customerInstance.rfc;
        customer.phone = customerInstance.phone;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            db.collection('customers').insert(customer);
            mongoConnection.close();
        });
    }

    // get() {

    // }

    // get() {

    // }

    // update() {

    // }

    // delete() {

    // }
};