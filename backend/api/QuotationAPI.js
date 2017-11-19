"use strict";

var QuotationEntity = require('../classes/QuotationEntity');
var Quotation  = require('../models/Quotation');
var mongoConnection = require( './MongoConnection' );

module.exports = {

    create: (quotationEntity) => {
        var quotation = new Quotation();
        quotation.id = quotationEntity.id;
        quotation.date = quotationEntity.date;
        quotation.isFinal = quotationEntity.isFinal;
        quotation.subtotal = quotationEntity.subtotal;
        quotation.revenueFactor = quotationEntity.revenueFactor;
        quotation.iva = quotationEntity.iva;
        quotation.discount = quotationEntity.discount;
        quotation.total = quotationEntity.total;
        quotation.metricPlus = quotationEntity.metricPlus;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            db.collection('quotationCollection').insert(quotation);
            mongoConnection.close();
        });
    },

    get: () => {
        
        var quotation;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            customers = db.collection('quotationCollection').findOne();
            console.log(quotation);
            mongoConnection.close();
        });

        return quotation;
    }

    // get: (id) => {

    // }

    // update: () => {

    // }

    // delete: (id) => {

    // }
};