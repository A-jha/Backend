const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first);
console.log(second);

//write to the second file
writeFileSync(
  "./content/syncWrite.txt",
  `This file is Created using writeFileSync function and not \n manually buddy and it contains first.txt : ${first} and second.txt: ${second} `,
  { flag: "a" } //this represent that do not override  the content
);
console.log("done every task");
