




const middle = function(mixedArray) {
 
  let middlePart = [];
  if (mixedArray.length <= 2) {
    return middlePart;
  } else if (mixedArray.length %2 === 0) {

    let index2 = mixedArray.length /2;
    let index1 = index2 -1;
    return mixedArray.slice(index1, index1 +2 );
    
  } else {
    let index1 = Math.floor(mixedArray.length /2);
    
    return [mixedArray[index1]];
  }
 


}


module.exports = middle;

