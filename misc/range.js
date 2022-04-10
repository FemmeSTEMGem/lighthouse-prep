
function range(start, end, step) {
  let rangeArray = []
  if (start > end || step <= 0 || arguments.length < 3) {
    return rangeArray
  } else {
    for (let i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    }
    return rangeArray;
  }
}

console.log(range(-5, 2));

