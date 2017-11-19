"use strict";

var ToolEntity = require('../classes/ToolEntity');
var ToolAPI = require('../api/ToolAPI');

var tool = new ToolEntity();
tool.id = 1;
tool.category = "Taladro";
tool.type = "toy";
tool.brand = "martillito";	
tool.model = "BFG9000";
tool.pricePerDay = 123.5;
tool.quantity = 1;
tool.available = 1;
tool.comment = "The cake is a lie!";
ToolAPI.create(tool);
//console.log(ToolAPI.get());