const fs = require('fs');

fs.unlinkSync('src/words.json');

const arr = [];
const regex = /^[a-zA-Z]+$/;

let data = fs.readFileSync('dictionary.txt');

const splitted = data.toString().split("\n");

splitted.forEach((item) => {
  if (item.length === 6 && regex.test(item)) {
    arr.push(item);
  }
});

const jsonData = JSON.stringify(arr);
fs.writeFileSync('src/words.json', jsonData);
