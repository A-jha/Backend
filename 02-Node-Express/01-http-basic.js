const http = require("http");

//create a server
const server = http.createServer((req, res) => {
  const url = req.url;

  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }

  //about page
  if (url === "/about") {
    res.writeHead(200, { "content-type": "application/javascript" });
    res.write('"name":"Avinash');
    res.end();
  }

  //else 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Sorry page not found</h1>");
    res.end();
  }
});
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is listing to por: ${PORT}`);
});
