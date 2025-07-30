// Modules protects thier variables and functions from leaking
console.log("Sum module executed");

var x = "Hello World!!";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
  // return sum;
}



module.exports = {
  x: x,
  calculateSum: calculateSum
};