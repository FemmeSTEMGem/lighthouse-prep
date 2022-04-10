function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function makeTriangle(triangleBase) {
  let numLines = "";
  for (let i = 1; i <= triangleBase; i++) {
    numLines += makeLine(i)
  }
  return numLines
}

console.log(makeTriangle(10));

