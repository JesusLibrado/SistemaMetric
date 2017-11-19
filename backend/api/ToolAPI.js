function create(tool, connection) {
	var toolInstance = new Tool();
	toolInstance.id = tool.id;
	toolInstance.category = tool.category;
	toolInstance.type = tool.type;
	toolInstance.brand = tool.brand;
	toolInstance.model = tool.model;
	toolInstance.pricePerDay = tool.pricePerDay;
	toolInstance.quantity = tool.quantity;
	toolInstance.available = tool.available;
	toolInstance.comment = tool.comment;
	toolInstance.save();
}
function get(id, connection) {
	var q = Tool.find({	id : id});
	tool = new ToolEntity();
	tool.id = q.id;
	tool.category = q.category;
	tool.type = q.type;
	tool.brand = q.brand;
	tool.model = q.model;
	tool.pricePerDay = q.pricePerDay;
	tool.quantity = q.quantity;
	tool.available = q.available;
	tool.comment = q.comment;
	return tool;
}
function get(connection) {
	var q = Tool.find({});
	var tools = [];
	for (var i = q.length - 1; i >= 0; i--) {
		tools[i] = new ToolEntity();
		tool[i].id = q[i].id;
		tool[i].category = q[i].category;
		tool[i].type = q[i].type;
		tool[i].brand = q[i].brand;
		tool[i].model = q[i].model;
		tool[i].pricePerDay = q[i].pricePerDay;
		tool[i].quantity = q[i].quantity;
		tool[i].available = q[i].available;
		tool[i].comment = q[i].comment;
	}
	return tools;
}
function update(id, tool, connection) {
	var toolInstance = new Tool();
	toolInstance.id = tool.id;
	toolInstance.category = tool.category;
	toolInstance.type = tool.type;
	toolInstance.brand = tool.brand;
	toolInstance.model = tool.model;
	toolInstance.pricePerDay = tool.pricePerDay;
	toolInstance.quantity = tool.quantity;
	toolInstance.available = tool.available;
	toolInstance.comment = tool.comment;
	Tool.findOneAndUpdate({id : id}, toolInstance);
}
function remove(id, connection) {
	Tool.remove({id : id});
}
