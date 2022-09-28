document.write("open console to see the output!");

let magicians = ["David Copperfield", "Roy Rochlin", "Getty Images"];

function show_magicians(_magicians) {
  _magicians.map((e) => {
    console.log(e);
  });
}

function make_great(_magicians) {
  for (let i = 0; i < _magicians.length; i++) {
    _magicians[i] = `The Great ${_magicians[i]}`;
  }
}

make_great(magicians);
show_magicians(magicians);
