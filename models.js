var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  		"phone": String,
		"date": Date,
		"last_sms": String,
});

exports.Project = Mongoose.model('Project', ProjectSchema);


