document.write("open console to see the output!");

function make_shirt(size = "large", message = "default message") {
  console.log(`your shirt size is ${size} and ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love small shirts");
