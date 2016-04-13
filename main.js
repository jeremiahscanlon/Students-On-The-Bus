// create the requires
var fs = require('fs');
var students = require('./studentConstructor.js');
var bus = require('./bus.js');

// use the bus consctuctor to create the bus
var bus1 = new bus();

// read the file that is holding the previously entered students
fs.readFile('allStudents.txt', "utf8",  (err, data) => {
	if (err) throw err;
	
	// create an array with all of the object strings in it
	var splitData = data.split("$");
	
	// loop the array of json strings
	for (var i = 0; i < splitData.length-1; i++) {
		// parse them into usable objects
		var json = JSON.parse(splitData[i]);
		// drop the objects one at a time into the "studentsOnTheBus" array
		bus1.studentEntersBus(json);
	};

	// run the busChatter method
	bus1.busChatter();
	
	// the remove student doesn't work yet. I'm still troubleshooting
	//bus1.removeStudent();
});

