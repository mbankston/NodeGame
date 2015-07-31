var scrum = require('./scrum');
var name = require('./name');
var skillset = require('./skillset');




function CreateEmp(){
    this.employeeScrum = scrum();
    this.employeeName = name();
    this.employeeSkill = skillset();
}

module.exports = CreateEmp;
