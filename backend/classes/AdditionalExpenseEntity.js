class AdditionalExpenseEntity {

    constructor() {
        this.description = null;
        this.price = null;
        this.comment = null;
    }

    toString() {
        return JSON.stringify(this);
    }
}

modules.export = AdditionalExpenseEntity;