const countOnly = function(allItems, itemsToCount) {
    const results = {}

    for(let item in itemsToCount) {
      if(itemsToCount[item] === true) {
        for(let repeatName of allItems) {
          if(item === repeatName) {
            if(!results[item]) {
              results[item] = 1
            } else {
              results[item] += 1
            }
          }
        }
      }
    }

    console.log(results)
    return results
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);