const findKey = require("./findKey");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findByKeyValue = function(obj, value) {
  let result = undefined;
  for (let [key, searchValue] of Object.entries(obj)) {
    if(value === searchValue) {
    result = key;
    }
  }

  return result;
}




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(findByKeyValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findByKeyValue(bestTVShowsByGenre, "That '70s Show"), undefined);



module.exports = findByKeyValue;