const howManyHundreds = function(num) {
  let hundreds = num / 100;
  hundreds = Math.floor(hundreds);
  return hundreds;
}

console.log(howManyHundreds(0), "=?", 0);
