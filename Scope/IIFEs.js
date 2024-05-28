var teacher = "Kyle";

// IIFE
// immediately invoked function expression
(function anotherTeacher() {
  var teacher = "suzy";
  console.log(teacher); // suzy
})();

console.log(teacher); // Kyle
