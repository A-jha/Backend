const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Nodejs Tutorial");
  }
  if (req.url === "/about") {
    res.end(`<h1>Welcome to about page</h1>`);
  } else {
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is activated on port: 5000");
});
