document.write("open console to see the output!");

function sandwichMaker(...items) {
  console.log(`you ordered ${items.join()}`);
}
sandwichMaker("chicken");
sandwichMaker("chicken", "vegetables");
sandwichMaker("chicken", "vegetables", "salid");
