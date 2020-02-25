const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const employeeSchema = new Schema({
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
  department: {type: String, required: true, trim: true},
  startDate: {type: Date, require: true, trim: true},
  jobTitle: {type: String, require: true, trim: true},
  salary: {type: Number, required: true, trim: true}
});

module.exports = mongoose.model('Employees', employeeSchema);
