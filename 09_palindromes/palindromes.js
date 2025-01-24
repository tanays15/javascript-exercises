const palindromes = function(string) {
  const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
  const newStr = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanum.includes(char))
    .join("");
  return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
