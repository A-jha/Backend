const { readFile, writeFile } = require("fs");

console.log("started");

//read one file
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
});

//print first and second
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("callback: ", first);
  //another read file for second.txt
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("callback : ", second + first);
    writeFile(
      "./content/asyncDoc.txt",
      `here we are in callback and concatenating the fist and second text file and saving to new text file : first text file:
         ${first} and second text file is ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done all the tasks");
      }
    );
  });
});

console.log("End");
