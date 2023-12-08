const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator,students) {
  // Start coding here
  accumulator += students.score;
  return accumulator;
}

let avg = students.reduce(getAverageStudentScore,0)/students.length;
console.log(avg);


