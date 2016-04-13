var prompt = require('prompt');

// create the bus constructor
var bus = function() {
	this.studentsOnTheBus = [];
	this.driverName = '';
	this.color = ''	;
	this.gas = 0;
	this.studentEntersBus = function(value) {
		// push the value passed to the function into the "studentsOnTheBus" array
		this.studentsOnTheBus.push(value);
	}
	this.busChatter = function() {
		// loop through the studentsOnTheBus array
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			// if they meet the requirements to have fun
			if (this.studentsOnTheBus[i].detentions<10 && this.studentsOnTheBus[i].gpa>2) {
				// console log the students name and their corresponding catch phrase
				console.log(this.studentsOnTheBus[i].name +' says: "'+ this.studentsOnTheBus[i].catchPhrase+'"');
			}
		}
	}
	this.removeStudent = function(studentName){
		// this does not currently work. will need to circle back to this another time.
		// NOTE: THIS IS A BONUS
		var schema = {
			properties: {
				remove: {
					description: 'Name of student to remove',
					required: true
				}
			}
		};
		
		var arrayLength = this.studentsOnTheBus.length;
		
		console.log(this.studentsOnTheBus);
		var removeStudentById = function(x){
			console.log('x: '+ x);
			console.log(this.studentsOnTheBus);
			//this.studentsOnTheBus.splice(x,1);
		}
		
		var studentNames = [];
		
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			studentNames.push(this.studentsOnTheBus[i].name);
		}
		
		prompt.get(schema, function (err, result) {
			var remove = result.remove;
			for (var i = 0; i < studentNames.length; i++) {
				if (remove == studentNames[i]) {
					removeStudentById(i);
				}
			}
			//this.busChatter();
		});

	}
}

module.exports = bus;