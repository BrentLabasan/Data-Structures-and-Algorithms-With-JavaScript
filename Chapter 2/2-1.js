// Create a grades object that stores a set of student grades in an object. 
// Provide a function for adding a grade and a function for displaying the student’s grade average.

var grades = [80,90,100];

/* doesn't work

function addGrade(gradeToAdd) {
    this.push(gradeToAdd);
}

grades.addGrade(80);

*/

grades.addGrade = function(gradeToAdd) {
    this.push(gradeToAdd);
}

grades.addGrade(80);

console.log(grades);

console.log("grades length: " + grades.length);



grades.displayAverage = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    console.log(sum/grades.length);
}

grades.displayAverage();