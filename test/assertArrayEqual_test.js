

const assertArraysEqual = require('../assertArrayEqual.js');

const eqArrays = require('../eqArrays.js');


const assertEqual = require('../assertEqual.js');



  
  
  
  
  assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
  
  assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
  
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false