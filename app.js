//require("./xyz"); // one module into another
// const obj = require("./sum");
// const { calculateSum } = require("./calculate/sum");
//const calculateMultiply = require("./calculate/multiply");

// import { calculateSum } from "./calculate/sum.js";
const {calculateMultiply, calculateSum} = require("./calculate")

var a = 10;
var b = 20;

// obj.calculateSum(a, b);
// console.log(obj.x);
const data = require("./data.json");

console.log(JSON.stringify(data));

calculateSum(a, b);
calculateMultiply(a, b);

// var res = a + b;
// console.log(res);
// console.log(global);
// console.log(this);
// console.log(globalThis);
// console.log(globalThis === global);