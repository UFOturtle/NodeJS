const mongoose = require("mongoose");

const Employee = mongoose.model("Employee", {
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
  department: {type: String, required: true, trim: true},
  startDate: {type: Date, require: true, trim: true},
  jobTitle: {type: String, require: true, trim: true},
  salary: {type: Number, required: true, trim: true}
});

module.exports = Employee;
