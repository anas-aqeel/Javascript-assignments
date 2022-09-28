document.write('open console to see the output!')

let yourName = "anas aQeeL";
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase());
console.log(
  yourName
    .split(" ")
    .map((e) => e.split("")[0].toUpperCase() + e.split("").slice(1).map((i)=> i.toLowerCase()).join(""))
    .join(" ")
);
