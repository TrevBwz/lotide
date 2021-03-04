const countLetters = function(toCount) {
const returnLetters = {}
for (let item of toCount) {
  if (returnLetters[item]) {
    returnLetters[item] ++
  } else {
    returnLetters[item] = 1
  }

}
return returnLetters;
};

// console.log(countLetters("LHLLLEERARBAB"));


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// assertEqual("Lighthouse in the house");