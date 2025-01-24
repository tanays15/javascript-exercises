const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
  const sum = arr.reduce((total, currItem) => {
    return total + currItem
  }, 0);
  return sum;
};

const multiply = function(arr) {
  const prod = arr.reduce((total, currItem) => {
    return total * currItem;
  }, 1)
  return prod;
};

const power = function(n1, n2) {
  let res = 1;
  for (let i = 0; i < n2; i++) {
    res *= n1;
  }
  return res;
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
