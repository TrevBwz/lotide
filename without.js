const without = function(source, itemsToRemove) {
  let newArray = [];
for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    }
}
return newArray
}



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
                
      if (array1[i] !== array2[i]) {
        return false;
      }
      }
  return true;
  };


const assertArraysEqual = function(array1, array2) {
if (eqArrays(array1, array2)) {
  console.log(`Assertion Passed: ${array1} === ${array2}`);
} else { 
  console.log(`Assertion Failed: ${array1} !== ${array2}`);
}
}





const words = ["hello", "world", "lighthouse"];
const filtered = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(filtered, ["hello", "world"]);

// will output;
// Assertion Passed: hello,world === hello,world

module.exports = without;