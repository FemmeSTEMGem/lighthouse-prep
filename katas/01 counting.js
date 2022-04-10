// const sumLargestNumbers = function(data) {
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