"use strict";

var PersonnelEntity = require('../classes/PersonnelEntity');
var PersonnelAPI = require('../api/PersonnelAPI');

var personnel = new PersonnelEntity();
personnel.id = 1;
personnel.state = "Production";
personnel.specialty = "Video";
personnel.comment = "He has a great portfolio.";
personnel.tariffPerDay = 1000;

PersonnelAPI.create(personnel);
console.log(PersonnelAPI.get());