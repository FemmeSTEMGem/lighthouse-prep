// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.


const instructorWithLongestName = function(instructors) {
  let longestNamePosition = 0
  let nameLength = 0
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > nameLength) {
      nameLength = instructors[i].name.length
      longestNamePosition = instructors[i]
    }
  }
  return longestNamePosition
};


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
nameLength = instructors[i].name.length
longestName = instructors[i].name
*/