document.write("open console to see the output!");

let current_users = ["Andrew", "Eric", "Dustin", "Jack", "Mike"];
let new_users = ["Jaffer", "ERiC", "Rox", "Petter", "MiKe"];

new_users.map((e) => {
  current_users.map((i) => {
    if (e.toLowerCase() == i.toLowerCase()) {
      console.log(e + " can not be accepted");
    }
  });
});
