/*
four rooms: ballroom, fallery, billiards room, dining room
four weapons: poison, a trophy, a pool stick, and a knife
four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, Mr. Kalehoff

Corresponding:
poison - ballroom
trophy - gallery
pool stick - billiards room
knife - dining room

Mr. Parkes - dining room
Ms. Van Cleve - gallery
Mrs. Sparr - billiards room
Mr. Kalehoff - ballroom

Write Statements that:
1) set value of the weapon based on the room
2) set value of solved to ture if room value matches the suspect's room
= __________ did it in the __________ with the __________!

*/

var suspect = "Mr. Parkes"
var room = "dining room"
var weapon = ""
var solved = ""

if (room === "ballroom") {
  weapon = "posion"
} else if (room === "gallery") {
  weapon = "trophy"
} else if (room === "billiards room") {
  weapon = "pool stick"
} else if (room === "dining room") {
  weapon = "knife"
}

if (suspect === "Mr. Parkes" && room == "dining room") {
  solved = true
} else if (suspect === "Ms. Van Cleve" && room === "gallery") {
  solved = true
} else if (suspect === "Mrs. Sparr" && room === "billiards room") {
  solved = true
} else if (suspect === "Mr. Kalehoff" && room === "ballroom") {
  solved = true
}
  else {
    solved = false
  }

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!")
}