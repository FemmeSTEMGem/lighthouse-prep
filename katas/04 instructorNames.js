
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