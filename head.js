

const head = function(mixedArray) {
  let first = mixedArray[0];
  return first;
}

module.exports = head;


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([8]), 8);
// assertEqual(head([]), undefined);
