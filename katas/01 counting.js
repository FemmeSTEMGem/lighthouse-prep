// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.


// Instruction
  // Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.


function sumLargestNumbers(array) {
  array.sort((a, b) => b - a)
  return array[0] + array[1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// 11node
// 5
// 126