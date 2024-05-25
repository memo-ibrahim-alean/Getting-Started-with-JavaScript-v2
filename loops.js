// 7
let students = ["Mohamed", "Ali", "Kareem"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}

console.log('-------------------------------');

for (let student of students) {
  console.log("🚀 ~ student:", student)
}

console.log('-------------------------------');

while (students.length > 0) {
  let student = students.shift();
  console.log(`Hello, ${student}!`)
}
