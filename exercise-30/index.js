document.write("open console to see the output!");

let userNames = ["Admin", "Eric", "Dustin", "Jack", "Mike"];
userNames = new Array(0);

if (userNames.length) {
  userNames.map((e) => {
    if (e == "Admin") {
      console.log(`Hello ${e}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${e}, thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
}
