




const middle = function(mixedArray) {
 
    let middlePart = [];
    if (mixedArray.length <= 2) {
      return middlePart;
    } else if (mixedArray.length %2 === 0) {

      let index2 = mixedArray.length /2;
      let index1 = index2 -1;
      return mixedArray.slice(index1, index1 +2 );
      // return [mixedArray[index1], mixedArray[index2]];
    } else {
      let index1 = Math.floor(mixedArray.length /2);
      
      return [mixedArray[index1]];
    }
   
  
 
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





assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
