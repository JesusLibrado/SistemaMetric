class QuotationEntity{
	constructor(){
		this.id = null;
	    this.date = null;
	    this.isFinal = null;
	    this.subtotal = null;
	    this.revenueFactor = null;
	    this.iva = null;
	    this.discount = null;
	    this.total = null;
	    this.metricPlus = null;
	}

	toString(){
		return JSON.stringify(this);
	}
}

module.exports = QuotationEntity;