document.write("open console to see the output!");

for (let i = 1; i < 10; i++) {
  console.log(i == 1 ? "1st" : i == 2 ? "2nd" : i == 3 ? "3rd" : `${i}th`);
}
