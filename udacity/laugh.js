let noise = ""

let laugh = function(haNum) {
  for (let i = 1; i <= haNum; i++) {
    noise += "ha"
  }
  return noise;
}

console.log(laugh(10));