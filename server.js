const http = require("http");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res)=>{
    // handle Get Request
    console.log(req.url, req.method);
    if(req.method === "GET"){
        let filePath;
        switch (req.url){
            case "/":
                res.statusCode = 200;
                res.setHeader("Content-Type","text/html");
                filePath = path.join(__dirname,"views","index.html");
                fs.readFile(filePath,"utf8",(err, data)=>{
                    if(err) res.end("This page can not be shown");
                    res.end(data);
                })
                break;
            case "/favicon.ico":
                const faviconPath = path.join(__dirname,"images",'favicon.ico');

                // Check if the file exists
                fs.access(faviconPath, fs.constants.R_OK, (err) => {
                    if (err) {
                        // If the file doesn't exist, return a 404 response
                        res.statusCode = 404;
                        res.end('Favicon not found');
                    } else {
                        // If the file exists, read and send it
                        fs.readFile(faviconPath, (err, data) => {
                            if (err) {
                                res.statusCode = 500;
                                res.end('Internal Server Error');
                            } else {
                                res.setHeader('Content-Type', 'image/x-icon');
                                res.end(data);
                            }
                        });
                    }
                });
        }
        
    }
})

server.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})
