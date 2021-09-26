const { createReadStream } = require("fs");

//default 64 kb
//last buffer - remainder
// highWatermark - control size

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
});

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
