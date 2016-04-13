var prompt = require('prompt');

// create student constructor
var student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPrase = catchPrase;
	this.canStudentHaveFun = function() {
		if (this.detentions < 10 && this.gpa > 2) {
			console.log('Student can have fun!');
		} else {
			console.log('Nope. Get back to work.');
		}
	}
}

prompt.start();

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPrase'], function (err, result) {
	var name = result.name;
	var gender = result.gender;
	var grade = result.grade;
	var gpa = result.gpa;
	var detentions = result.detentions;
	var sleepingInClass = result.sleepingInClass;
	var catchPrase = result.catchPrase;

	var newStudent = new student(name, gender, grade, gpa, detentions, sleepingInClass, catchPrase);

	newStudent.canStudentHaveFun();

});