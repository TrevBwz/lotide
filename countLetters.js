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



module.exports = countLetters;