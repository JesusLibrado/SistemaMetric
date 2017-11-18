class EventEntity{
    
    constructor(){

        this.id = null;
        this.date = null;
        this.days = null;
        this.place = null;
        this.hidden = null;
    }

    toString(){

        return JSON.stringify(this);
    }
}

module.exports = EventEntity;
    