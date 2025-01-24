const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS"
  }
  if (n == 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  let first = 1;
  let second = 1;
  for (let i = 2; i < n; i++) {
    let temp = second;
    second = first + second;
    first = temp;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
