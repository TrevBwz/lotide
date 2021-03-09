// const head = require('../head.js');

// const assertEqual = require('../assertEqual.js');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([8]), 8);
// assertEqual(head([]), undefined);



const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {


it("returns 5 for 5, 6, 7", () => {
    assert.strictEqual(head(['5', '6', '7']), '5'); 
  });

  it("returns Hello for Hello, Lighthouse, Labs", () => {
    assert.strictEqual(head(['Hello', 'lighthouse', 'labs']), 'Hello'); 
  });

  it("returns 8 for 8", () => {
    assert.strictEqual(head(['8']), '8'); 
  });

  it("returns undefined for []]", () => {
    assert.strictEqual(head([]), undefined); 
  });


});
