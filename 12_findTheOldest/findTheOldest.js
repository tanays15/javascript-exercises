const findTheOldest = function(arr) {
  return arr.reduce((oldest, person) => {
    if (person.yearOfDeath === undefined || oldest.yearOfDeath === undefined) {
      return oldest = person.yearOfBirth > oldest.yearOfBirth ? oldest : person
    } else {
      const old = oldest.yearOfDeath - oldest.yearOfBirth;
      const per = person.yearOfDeath - person.yearOfBirth;
      return oldest = old > per ? oldest : person;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
