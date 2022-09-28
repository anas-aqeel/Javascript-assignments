document.write("open console to see the output!");

let invitedPeople = ["Haris", "Uncle", "Fahad", "Saad"];

console.log("invited people ", invitedPeople);
invitedPeople.map((e) => {
  console.log(`Inviting ${e} to dinner`);
});

// Fahad can't make dinner

console.log(""); // whitespace in console
console.log("Fahad can't make dinner!");
console.log(""); // whitespace in console

invitedPeople[2] = "Imad";
invitedPeople.map((e) => {
  console.log(`Now! Inviting ${e} to dinner`);
});

// I've found a bigger table!

console.log(""); // whitespace in console
console.log("I've found a bigger table!");
console.log(""); // whitespace in console

//  Inviting 3 more guests
// 1- Babar 2- Rizwan 3- Fakhar
 
invitedPeople.unshift("Babar");
invitedPeople.splice(2, 3, "Uncle", "Rizwan", "Imad");
invitedPeople.push("Fakhar");

invitedPeople.map((e) => {
  console.log(`Now! Inviting ${e} to dinner`);
});
