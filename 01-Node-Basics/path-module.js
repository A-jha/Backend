//path module

const path = require("path");

//sep return separating character '/'
console.log(path.sep);

//make a file path
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

//make a file path using __dirname
const filePath1 = path.join(__dirname, "/newFile.js");
console.log(filePath1);

//base path -- current file
const base = path.basename(filePath1);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, "tst.txt");
console.log(absolute);
