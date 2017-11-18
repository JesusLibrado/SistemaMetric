class CustomerEntity {

    constructor() {
        this.id = null;
        this.email = null;
        this.type = null;
        this.name = null;
        this.rfc = null;
        this.phone = null;
    }

    toString() {
        return  JSON.stringify(this);
    }

}

module.exports = CustomerEntity;