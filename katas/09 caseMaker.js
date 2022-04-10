// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

// Create a function named camelCase that will convert a string to camel case, and return the result.


const camelCase = function(input) {
  let splitArray = input.split(' ');
  for (let i = 1; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
  };
  return(splitArray.join(""));
}


  
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//string = ['this', 'is', 'a', 'string']
//string[0].charAt(0).toUpperCase()
//console.log(string[0].charAt(0).toUpperCase())