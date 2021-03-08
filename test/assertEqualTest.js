// TEST CODE

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const assertEqual = require('../assertEqual');


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
