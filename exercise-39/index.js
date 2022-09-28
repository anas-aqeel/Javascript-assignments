document.write("open console to see the output!");

function make_album(name, title, tracks = 1) {
  return {
    "Artist Name": name,
    "Album Title": title,
    Tracks: tracks,
  };
}
console.log(make_album("Anas", "song", 3));
console.log(make_album("Anasasas", "song2"));
console.log(make_album("An2as", "song", 4));
