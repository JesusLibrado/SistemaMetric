"use strict";

var PersonnelEntity = require('../classes/PersonnelEntity');
var Personnel  = require('../models/Personnel');
var mongoConnection = require( './MongoConnection' );

module.exports = {

    create: (personnelEntity) => {

        var personnel = new Personnel();
        personnel.id = personnelEntity.id;
        personnel.state = personnelEntity.state;
        personnel.specialty = personnelEntity.specialty;
        personnel.comment = personnelEntity.comment;
        personnel.tariffPerDay = personnelEntity.tariffPerDay;

        mongoConnection.connectToServer(function(err) {
            var db = mongoConnection.getDb();
            db.collection('personnelCollection').insert(personnel);
            mongoConnection.close();
        });
    },

    get: () => {
        
        var personnels;

        mongoConnection.connectToServer(function(err) {
            
            var db = mongoConnection.getDb();
            personnels = db.collection('personnelCollection').findOne();
            console.log(personnels);
            mongoConnection.close();
        });

        return personnels;
    }

    // get: (id) => {

    // }

    // update: () => {

    // }

    // delete: (id) => {

    // }
};