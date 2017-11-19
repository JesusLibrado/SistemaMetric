"use strict";

var QuotationEntity = require('../classes/QuotationEntity');
var QuotationAPI = require('../api/QuotationAPI');

var quotation = new QuotationEntity();
quotation.id = 2;
quotation.date = "2015-03-25";
quotation.isFinal = true;
quotation.subtotal = 1000;
quotation.revenueFactor = 0.4;
quotation.iva = .16;
quotation.discount = .1;
quotation.total = 900;
quotation.metricPlus = "Algo";

QuotationAPI.create(quotation);
//console.log(QuotationAPI.get());