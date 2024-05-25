
// 8
/*
  This function logs a personalized greeting message to the console, using the name property of a student object.
*/
function greetStudents(student) {
  console.log(`Hello, ${student.name}!`);
}



greetStudents({ name: "Mohamed", age: 26 });


/*
  This JavaScript function, timeRemaining, takes two arguments: TimeElapsed and endTime. It calculates and returns the remaining time by subtracting the TimeElapsed from the endTime. It's typically used to calculate the time left until a certain event or deadline.
*/
function timeRemaining(TimeElapsed, endTime) {
  return endTime - TimeElapsed;
}

var left = timeRemaining(42, 240);

console.log(left); // 198
