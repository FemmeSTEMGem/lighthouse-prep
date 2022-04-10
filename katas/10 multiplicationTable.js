// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

// Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.


const multiplicationTable = function(maxValue) {
  let array = []
  for (let x = 1; x <= maxValue; x++) {
    for (let y = 1; y <= maxValue; y++) {
      array.push(x*y)
    }
    array.push('\n')
  }
  console.log(array.join(" "))
};

multiplicationTable(1)
multiplicationTable(5)
multiplicationTable(10)