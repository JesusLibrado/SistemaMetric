class ToolEntity {
	constructor() {
		this.id  = null;
		this.category = null;
		this.type = null;
		this.brand = null;
		this.model = null;
		this.pricePerDay = null;
		this.quantity = null;
		this.available = null;
		this.comment = null;
	}
	toString() {
		return JSON.stringify(this);
	}
}
module.exports = ToolEntity;