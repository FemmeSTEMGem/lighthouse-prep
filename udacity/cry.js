let sound = ""

let cry = function(numSads) {
  for (x = 1; x <= numSads; x++) {
  sound += "boohoo"
  }
  return sound + "!"
}

console.log(cry(10));
