const sumAll = function(lower, upper) {
  if (!Number.isInteger(lower) || !Number.isInteger(upper) || lower < 0 || upper < 0) {
    return "ERROR"
  }
  let sum = 0;
  if (lower > upper) {
    let tmp = lower;
    lower = upper;
    upper = tmp;
  }
  while (lower <= upper) {
    sum += lower;
    lower++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
