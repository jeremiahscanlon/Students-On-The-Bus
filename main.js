var fs = require('fs');
var students = require('./studentConstructor.js');
//var promptStudent = require('./student.js');
var bus = require('./bus.js');

var bus1 = new bus();

fs.readFile('allStudents.txt', "utf8",  (err, data) => {

	if (err) throw err;
	var splitData = data.split("$");
	for (var i = 0; i < splitData.length-1; i++) {
		var json = JSON.parse(splitData[i]);
		bus1.studentEntersBus(json);
	};
	bus1.busChatter();
	//bus1.removeStudent();
});

