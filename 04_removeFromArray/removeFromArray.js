const removeFromArray = function() {
  let arr = arguments[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
