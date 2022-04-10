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


/*
function conditionalSumDanny(valueArray, condition) {
  let finalSum = 0;
  for (let index = 0; index < valueArray.length; index++) {
    let currentNumber = valueArray[index];
    
    if (condition == "even") {
      if (currentNumber % 2 == 0) {
        finalSum += currentNumber;
      }
    } else {
      if (currentNumber % 2 != 0) {
        finalSum += currentNumber;
      }
    }

    return finalSum
  }
}
*/
console.log(conditionalSum([1, 2, 3, 4, 5], "even") == 6);
console.log(conditionalSum([1, 2, 3, 4, 5], "odd") == 9);
console.log(conditionalSum([13, 88, 12, 44, 99], "even") == 144);
console.log(conditionalSum([], "odd") == 0);


