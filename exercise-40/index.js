document.write("open console to see the output!");

let magicians = ["David Copperfield", "Roy Rochlin", "Getty Images"];

function show_magicians(_magicians) {
  _magicians.map((e) => {
    console.log(e);
  });
}
show_magicians(magicians);
