var prompt = require('prompt');
var fs = require('fs');
var students = require('./studentConstructor.js');

var promptStudent = function() {
	prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
		var name = result.name;
		var gender = result.gender;
		var grade = result.grade;
		var gpa = result.gpa;
		var detentions = result.detentions;
		var sleepingInClass = result.sleepingInClass;
		var catchPhrase = result.catchPhrase;

		var newStudent = new students(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase);

		fs.appendFile('allStudents.txt', JSON.stringify(newStudent) + "$", (err) => {
			if (err) throw err;
			console.log('The "data to append" was appended to file!');
		});

		newStudent.canStudentHaveFun();
	});
}

promptStudent();
module.exports = promptStudent;
