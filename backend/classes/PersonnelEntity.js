class PersonnelEntity{

    constructor(){

        this.id = null;
        this.state = null;
        this.specialty = null;
        this.comment = null;
        this.tariffPerDay = null;
    }

    toString(){

        return JSON.stringify(this);
    }
}

module.exports = PersonnelEntity;
