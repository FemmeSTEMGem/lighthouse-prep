/*
const urlEncode = function(text) {
  let replacedText = ""
  for (let i = 0; i <= text.length; i++) {
    if (text[i] == "L") {
      replacedText.push("%20")
    } else {
      replacedText.push(i)
    }
  }
  return(replacedText)
};
*/
/*
const urlEncode = function(text) {
  let separated = text.split(" ")
  let reconstituted = []
  for (let i = 0; i < separated.length; i++) {
    reconstituted.push(separated[i])
    reconstituted.push("%20")
  }
  return reconstituted.join("")
}
*/

const urlEncode = function(text) {
  let separated = text.trim().split(" ")
    for (let i = 0; i < separated.length - 1; i++) {
      separated[i] += "%20";
    };
  return separated.join('');
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
//Use split and an array, but use the array length to determine number of times to add %20, as long as i < array.length, add %20, i = i+2