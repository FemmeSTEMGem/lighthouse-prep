// Welcome back to Codeville! The citizens of Codeville seem pleased with all the upgrades your administration has been making to the local infrastructure, and they want more! The parking lot in the Codeville Devtropolis Shopping Mall needs an upgrade, and you've decided this is the perfect opportunity to install a smart parking system.

// The system will use special parking sensors to keep track of all parking spots and monitor which ones are available. Every time a vehicle enters the parking lot, the system directs them to an available spot for their particular vehicle type, or notifies them that no spots are available.


// Instruction
  // We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

// There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.
// In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

// Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.


// Note
  // Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let spot = spots[y][x];
      if (vehicle === "regular" && spot === "R") {
          return [x, y];
        } else if ((vehicle === "small") && (spot === "R" || spot === "S")) {
            return [x, y];
        } else if ((vehicle === "motorcycle") && (spot === "R" || spot === "S" || spot === "M")) {
            return [x, y];
        }; 
      };
    };  
  return false;
}

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

//If spot = x, y, or z, then validspot = true

//Step One: define which cars can go in which spots
//Step Two: create a for-loop within a for-loop to iterate over the arrays to find a valid spot