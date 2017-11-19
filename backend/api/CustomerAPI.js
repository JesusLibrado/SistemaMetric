"use strict";

var CustomerEntity = require('../classes/CustomerEntity');
var Customer  = require('../models/Customer');
var mongoConnection = require( './MongoConnection' );

module.exports = {

    create: (customerInstance) => {
        var customer = new Customer();
        customer.id = customerInstance.id;
        customer.email = customerInstance.email;
        customer.type = customerInstance.type;
        customer.name = customerInstance.name;
        customer.rfc = customerInstance.rfc;
        customer.phone = customerInstance.phone;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            db.collection('customerCollection').insert(customer);
            mongoConnection.close();
        });
    },

    get: () => {
        
        var customers;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            customers = db.collection('customerCollection').findOne();
            console.log(customers);
            mongoConnection.close();
        });

        return customers;
    }

    // get: (id) => {

    // }

    // update: () => {

    // }

    // delete: (id) => {

    // }
};