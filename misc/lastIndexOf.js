/*
function lastIndexOf(array, value) {
  let arrayTracker = []
  for (let i = array.length; i >= 0; i--) {
    if (array[i] == value) {
      return i;
    } else if (array[i] != value) {
      arrayTracker.push(-1);
    }
  }
  return arrayTracker[0];
}
*/

function lastIndexOf(array, value) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}


console.log(lastIndexOf([], 3));
