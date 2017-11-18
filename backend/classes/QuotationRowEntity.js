class QuotationRowEntity{
	constructor(){
		this.id = null;
	    this.quantity = null;
	    this.days = null;
	    this.amount = null;
	}

	toString(){
		return JSON.stringify(this);
	}
}

module.exports = QuotationRowEntity;