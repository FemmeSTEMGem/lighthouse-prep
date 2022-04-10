const repeatNumbers = function(data) {
  let arrayOutput = [];
  for (i = 0; i < data.length; i++) {
    arrayOutput.push(", ");
    for (j = 0; j < data[i][1]; j++) {
        arrayOutput.push(data[i][0]);
    };
  };
  arrayOutput.shift();
  return arrayOutput.join('');
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//
//expected output:
//1111111111
//11, 222
//10101010, 343434343434, 9292

//take a two dimentional array
//for each sub array, take the first number and repeat it x the second number