var teacher = "Kyle";

function otherClass() {
  teacher = "suzy";
  topic = "React";
  console.log("Welcome");
}

otherClass(); // Welcome!

console.log(teacher); // "suzy"
console.log(topic); // "React"
