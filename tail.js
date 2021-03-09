

const tail = function(mixedArray) {
  let last = [];
  for (let i = 1; i < mixedArray.length; i++) {
    last.push(mixedArray[i]);
  }
   return last;
};
  
  

module.exports = tail;

