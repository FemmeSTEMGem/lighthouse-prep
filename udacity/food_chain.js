/*
var eatsPlants = true
var eatsAnimals = false

if (eatsPlants === true && eatsAnimals === false) {
  console.log("herbivore");
} else if (eatsPlants === false && eatsAnimals === true) {
  console.log("carnivore");
} else if (eatsPlants === true && eatsAnimals === false) {
  console.log("omnivore");
} else {
  console.log("undefined");
}
*/

var eatsPlants = true
var eatsAnimals = false

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

