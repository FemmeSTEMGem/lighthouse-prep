var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley"];

let hasEnoughPlayers = function(teamLength) {
  if (teamLength.length >= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEnoughPlayers(team));