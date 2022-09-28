document.write('open console to see the output!')

// this program simply convert the name to uppercase, lowercase 

let yourName = "anas aQeeL"; // actual input
console.log(yourName.toUpperCase()); // Anas Aqeel
console.log(yourName.toLowerCase()); // anas aqeel
console.log(
  yourName
    .split(" ")
    .map((e) => e.split("")[0].toUpperCase() + e.split("").slice(1).map((i)=> i.toLowerCase()).join(""))
    .join(" ")
); // Anas Aqeel
