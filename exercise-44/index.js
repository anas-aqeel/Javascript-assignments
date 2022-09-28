document.write("open console to see the output!");

function storeInfo(manufacturer, name, ...keywords) {
  return {
    manufacturer,
    "model name": name,
    keywords,
  };
}

console.log(storeInfo("Suzuki", "2022"));

console.log(
  storeInfo("Suzuki", "2022", { color: "grey" }, { condition: "new" })
);
