const numberOfVowels = function(data) {
  let letters = data.split('');
  let totalVowels = 0
  for (let index = 0; index < letters.length; index++) {
  let letterInQuestion = letters[index];
  if (['a', 'e', 'i', 'o', 'u'].includes(letterInQuestion)) {
      totalVowels++
    }
  }
  return totalVowels
}


console.log(numberOfVowels("orange") == 3);
console.log(numberOfVowels("lighthouse labs") == 5);
console.log(numberOfVowels("aeiou") == 5);