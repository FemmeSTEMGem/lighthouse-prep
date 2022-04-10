/*
My Code:

function makeLine(length) {
  let line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
return line + "/n";
}   

function buildTriangle(height) {
  for (let l = 1; l <= height; l++) {
    console.log(makeLine(l));
  }
}

console.log(buildTriangle(10));
*/




/*
Their Code:

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length) {
    var triangle = "";
    var lineNumber = 1;
    for(lineNumber=1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10));
*/