const { readFileSync } = require("fs");
const http = require("http");

//get home.html
const home = readFileSync("./home.html");
//get style.css
const style = readFileSync("./style.css");
//get 2-http-app.js
const script1 = readFileSync("./index.js");
//get svg img
const svg1 = readFileSync("./svg1.svg");

//create server
const server = http.createServer((req, res) => {
  const url = req.url;

  //homepage
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/style") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  } else if (url === "/script") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(script1);
    res.end();
  } else if (url === "/svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(svg1);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Sorry page not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`server is listing to port 5000`);
});
