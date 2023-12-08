const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  
  return students.reduce((studentAccumulator,studentCurrentScore)=>studentAccumulator+studentCurrentScore.score,0)/students.lengthawdsdw
}
// Object.prototype.ying = function(obj){return this.reduce((studentAccumulator,studentCurrentScore)=>studentAccumulator+studentCurrentScore.score,0)}
//   return students.ying()/students.length ying is method call method = .methodname()
console.log(getAverageStudentScore(students)) // Output: 87.5
