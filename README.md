# Students-On-The-Bus
node.js app using javascript constructors, requires, and exports

Basic javascript application run in command line using node.js that uses javascript constructors, requires, module.exports, and objects. Users can create students using by running a script that utilizes the npm *prompt* tool to capture input. The information captured is run through the student constructor and the resulting object is written to a text document using node's *fs* package. The user can then run the main app which first creates a bus object by running a contructor from a separate required file. The *main.js* then adds all the current students to the bus object and a function is triggered to output data from the objects based on a set of requirements.
 
## Instructions to run locally 

1) Clone repository 

```
git clone https://github.com/jeremiahscanlon/Students-On-The-Bus.git
```

2) Navigate to newly installed folder and download npm packages

```
cd *path*/Students-On-The-Bus/
npm install
```

3) Add students by running student.js using node.

````
node student.js
````

4) Load the bus and check the student responses by running main.js using node.
````
node main.js
````
## Notes

- You can run *node student.js* over and over again to add more students

- The student objects are stored in *allStudents.txt*

- There are 20 student examples saved in *allStudents.txt* now. To start your own list you can delete the contents of this file on your install

- In order for the student's catchphrase to show when running *main.js* they must have a gpa > 2 and detentions < 10


## Questions

For questions, contact Jeremiah Scanlon (jeremiah.j.scanlon@gmail.com)
