// For this kata, we'll be adding only the numbers in the array which match the given condition.


// Instruction
  // Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.


// Warning
  // Use some sort of looping. Do Not use Array.prototype.filter()


const conditionalSum = function(values, condition) {
  let addedUpArray = []
  if (condition === "even") {
    for (let index = 0; index < values.length; index++) {
      if (values[index] % 2 === 0) {
        addedUpArray.push(values[index]);
      }
    }
  } else {
    for (let index = 0; index < values.length; index++) {
      if (values[index] % 2 !== 0) {
        addedUpArray.push(values[index]);
      }
    }
  }
  
  let pile = 0
  // [ 2, 12, 24 ]
  for (let index = 0; index < addedUpArray.length; index++) {
    pile += addedUpArray[index]
  }

  return pile;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even") == 6);
console.log(conditionalSum([1, 2, 3, 4, 5], "odd") == 9);
console.log(conditionalSum([13, 88, 12, 44, 99], "even") == 144);
console.log(conditionalSum([], "odd") == 0);


