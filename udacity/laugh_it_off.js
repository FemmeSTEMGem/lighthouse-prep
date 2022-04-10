let laughing = ""

function laugh (num) {
  for (let x = 0; x < num; x++) {
    laughing = laughing + "ha";
  }
    laughing = laughing + "!"
    return laughing
}
console.log(laugh(3))