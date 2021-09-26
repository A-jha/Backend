<div align="center">
<img src="https://i.ibb.co/44kHY6h/pngaaa-com-4547668.png" width="90"/>
<h1>Complete NodeJs Cheat Sheet</h1>
</div>

## 1. Globals In Node Js

Globals are the functionalities which are directly available to us.

```js
//it will return absolute path of working directory
console.log(__dirname);

//it will return abs path with file name
console.loh(__filename);

//console is also a global
```

- There are ton of globals in Nodejs we can use it directly when we need

## 2. module/ function

Modules are the way to divide the problem into small sub problems

Modules is an example of polymorphism.

Function are the program that is use to perform same take multiple times

- simple Function

  ```js
  function sayHi() {
    console.log("Hi. . . ");
  }
  ```

- Arrow Function
  ```js
  const sayBye = () => console.log("Bye 🖐️");
  ```

Function can not be used in multiple program so we need to convert them into modules

- convert simple function to modules

  ```js
  function sayHi() {
    console.log("Hi. . . ");
  }
  module.exports = sayHi;
  ```

similar way we can convert arrow function to modules

Now the question is How do we use that module in other program.

    ```js
    const sayHi = require("./sayHi");
    //now You can use it
    ```

- Returning Selected functions

  ```js
  //not want to share
  const password = "#password";
  //const name
  const name = "Avinash";
  const courses = ["Nodejs", "React"];

  module.exports = { name, course };
  ```

## 3. OS- Module

The os module provides operating system-related utility methods and properties.

This module comes with node js and this module helps us in finding the information about the system we are using

- os name
- os version
- uptime
- release
- username
- memory details etc

  ```js
  const os = require("os");
  ```

## 4. Path Module

The path module provides utilities for working with file and directory paths.
As per name this module deals with path

- resolve
- normalize
- join
- dirname
- basename
- extname
- parse
- sep
- delimiter

these are some of the popular methods in path modules

```js
const path = requir("path");
```

## 5. File System Module

### 1. Read and write file synchronously

Basically sync word means one at a time and one process is running then other process have to wait

- readFileSync() : this function give us ability to read the

  ```js
  const { readFileSync, writeFileSync } = require("fs");
  const first = readFileSync("./content/first.txt", "utf-8");
  ```

- writeFileSync() : This function allows us to write in an existing file or create a new file with the specified name and write the content inside it.

  ```js
  writeFileSync(
    "./content/syncWrite.txt",
    `This file is Created using writeFileSync function and not \n manually buddy and  it contains first.txt : ${first} and second.txt: ${second} `,
    { flag: "a" } //this represent that do not override  the content
  );
  ```

### 2. Read and write file asynchronously

Asyn means the code that is async are sent to queue and when they are done then they can dequeued

- readFile : Asynchronously reads the entire contents of a file.

- writeFile : When file is a filename, asynchronously writes data to the file, replacing the file if it already exists

## 6. http Module

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

- Create your first server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Welcome to home page`);
  } else {
    res.end("No page defined");
  }
});

server.listen(5000, () => {
  console.log("Activated port is 5000");
});
```

## 7. Event module

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

```js
//on
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});
//emit
customEmitter.emit("response", "Avinash", 21);
```

## 8. Stream from File System
