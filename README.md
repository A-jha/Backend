# Nodejs

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, which is developed by Google for use in their Chrome web browser. Node.js enables server-side scripting and the development of network applications.

Here are some key features and concepts associated with Node.js:

1. **Non-blocking I/O:** Node.js is designed around an event-driven, non-blocking I/O model. This means that it can handle a large number of concurrent connections efficiently without the need for threads or processes. Asynchronous programming is a central concept in Node.js, and it uses callbacks, Promises, and async/await to manage asynchronous operations.

2. **Modules:** Node.js has a module system that allows you to organize your code into reusable modules. CommonJS is the module specification used in Node.js, and you can use the `require` function to include modules in your code.

3. **npm (Node Package Manager):** npm is the default package manager for Node.js. It provides a vast ecosystem of open-source libraries and packages that you can easily integrate into your projects. You can use npm to install, manage, and publish packages.

4. **Event Loop:** Node.js operates on a single-threaded event loop, which efficiently manages I/O operations and events. This event-driven architecture makes it suitable for building real-time applications, such as web servers, chat applications, and streaming services.

5. **Cross-platform:** Node.js is compatible with various operating systems, including Windows, macOS, and various Linux distributions, making it a versatile choice for development.

6. **Community and Ecosystem:** Node.js has a large and active community of developers, which has led to the creation of numerous third-party libraries and frameworks. Popular frameworks like Express.js are built on top of Node.js for web application development.

7. **Streaming:** Node.js provides built-in support for streaming data, which is useful for tasks like file manipulation, network communication, and handling large volumes of data.

8. **Scalability:** Node.js is known for its ability to handle a large number of concurrent connections, making it a good choice for building scalable and high-performance applications.

9. **Security:** Node.js has a security model that includes features like the Node.js Security Working Group, which focuses on identifying and addressing security vulnerabilities in the Node.js ecosystem.

Node.js is commonly used for various types of applications, including web servers, API servers, real-time applications (such as chat applications and online games), command-line tools, and more. It has gained popularity in recent years and is widely adopted in both startups and large enterprises for its efficiency and versatility in building modern web and network applications.

# How Nodejs is different from Vanilla Js

Node.js and vanilla JavaScript are related but serve different purposes and operate in different environments:

1. **Environment:**
   - **Vanilla JavaScript (Browser):** Vanilla JavaScript is executed within web browsers and primarily used for creating interactive web pages. It runs in the client-side environment.
   - **Node.js (Server):** Node.js is a runtime environment for executing JavaScript on the server-side. It allows you to build server applications and perform tasks outside of web browsers.

2. **Execution Context:**
   - **Vanilla JavaScript:** In the browser, JavaScript code operates within the context of a web page, manipulating the Document Object Model (DOM) to make web pages interactive.
   - **Node.js:** Node.js operates in a different context, handling tasks like file I/O, network communication, and server operations. It doesn't have access to the DOM because it's not running in a browser.

3. **Use Cases:**
   - **Vanilla JavaScript:** Used for client-side scripting, adding interactivity to web pages, and creating browser-based applications.
   - **Node.js:** Used for server-side scripting, building web servers, APIs, real-time applications, and various server-based tasks like data processing.

4. **Libraries and APIs:**
   - **Vanilla JavaScript:** Provides APIs for interacting with the DOM, handling user events, making AJAX requests, and more within the browser environment.
   - **Node.js:** Offers its own set of APIs for handling file I/O, networking, working with streams, and other server-related tasks.

5. **Concurrency Model:**
   - **Vanilla JavaScript:** Typically follows a single-threaded, event-driven model for handling user interactions within the browser.
   - **Node.js:** Also follows an event-driven model but is designed for handling many concurrent connections efficiently on the server-side. It uses non-blocking I/O operations to achieve this.

6. **Package Management:**
   - **Vanilla JavaScript:** Doesn't have a built-in package manager but relies on browser support and HTML/CSS for web applications.
   - **Node.js:** Comes with npm (Node Package Manager), which provides a vast ecosystem of reusable packages and libraries for server-side development.

In summary, while both Node.js and vanilla JavaScript involve writing JavaScript code, they operate in different environments and have different purposes. Vanilla JavaScript is for client-side web development within browsers, while Node.js is a server-side runtime for building scalable server applications and performing server-related tasks.

# Global Object in Nodejs

In Node.js, the global object serves a similar purpose to the `window` object in web browsers when writing JavaScript for the client-side. It provides a global scope for variables and functions that can be accessed from any module or script in a Node.js application. However, there are some key differences and considerations:

1. **`global` Object:** In Node.js, the global object is simply referred to as `global`. You can access it directly without needing to declare it.

2. **Global Variables:** Variables declared without the `var`, `let`, or `const` keywords inside a Node.js module are automatically attached to the `global` object. For example:

   ```javascript
   myVariable = 10; // This becomes a property of the global object.
   ```

   You can then access `myVariable` from any module in your Node.js application.

3. **Global Functions:** Some functions, like `setTimeout` and `setInterval`, are globally available in Node.js without having to require them explicitly. These functions are attached to the `global` object.

   ```javascript
   setTimeout(() => {
     console.log("Hello, after 1 second!");
   }, 1000);
   ```

   Note that while these functions are globally accessible, it's generally better practice to require modules explicitly when using functions or libraries, as this makes your code more readable and maintainable.

4. **Differences from Browser:** Unlike the browser's `window` object, the `global` object in Node.js does not contain all the properties and methods associated with the browser environment. Instead, it provides access to Node.js-specific functionality and modules.

5. **Scoping:** Variables and functions declared with `var` outside of any function in Node.js are attached to the `global` object and have global scope. However, variables declared with `let` or `const` outside of a function are not attached to the `global` object and do not have global scope.

It's important to exercise caution when using the `global` object in Node.js, as it can lead to unintended side effects and make your code less modular and harder to maintain. It's generally recommended to use module-scoped variables and functions (i.e., variables and functions declared with `var`, `let`, or `const` inside a module) to keep your code encapsulated and modular. Only use the `global` object when you have a specific need for a global variable or function that should be accessible across modules in your application.


# Common Core Modules / common js imports

Common Core Modules in Node.js refer to a set of built-in modules that are included with every Node.js installation. These modules provide essential functionality for tasks such as file I/O, networking, and working with various data types. You can use them in your Node.js applications without the need to install additional packages. CommonJS is a specification for modules in JavaScript, and Node.js follows this specification for its built-in modules.

Here are some common Core Modules in Node.js along with examples of how to use them:

1. **fs (File System):** This module provides functions for working with the file system, such as reading and writing files.

   ```javascript
   const fs = require('fs');
   fs.readFile('file.txt', 'utf8', (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

2. **http:** This module allows you to create HTTP servers and make HTTP requests.

   ```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end('Hello, World!\n');
   });
   server.listen(3000, 'localhost', () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```

3. **path:** The `path` module provides utilities for working with file and directory paths.

   ```javascript
   const path = require('path');
   const fullPath = path.join(__dirname, 'files', 'example.txt');
   console.log(fullPath);
   ```

4. **os (Operating System):** This module provides information about the operating system on which Node.js is running.

   ```javascript
   const os = require('os');
   console.log(`Platform: ${os.platform()}`);
   console.log(`CPU Architecture: ${os.arch()}`);
   ```

5. **events:** The `events` module allows you to create and handle custom events.

   ```javascript
   const EventEmitter = require('events');
   const myEmitter = new EventEmitter();

   myEmitter.on('customEvent', (message) => {
     console.log(`Received message: ${message}`);
   });

   myEmitter.emit('customEvent', 'Hello, Custom Event!');
   ```

6. **util:** The `util` module provides various utility functions for debugging and working with objects.

   ```javascript
   const util = require('util');
   const debuglog = util.debuglog('myapp');

   debuglog('This is a debug message.');
   ```

These are just a few examples of the Core Modules in Node.js. You can explore the Node.js documentation to learn more about these modules and their usage.

Regarding CommonJS imports, Node.js follows the CommonJS module system for loading and managing modules. You use the `require` function to import modules, as demonstrated in the examples above. CommonJS is a widely used module system in Node.js, and it allows you to create reusable code in separate files and include them in your Node.js applications using `require`.

# OS Module in Nodejs

The `os` module in Node.js is a built-in module that provides a set of utility methods and properties related to the operating system on which Node.js is running. You can use this module to gather information about the operating system, such as platform, architecture, and CPU-related details. Here are some common use cases for the `os` module:

1. **Getting Operating System Information:**

   ```javascript
   const os = require('os');

   console.log(`Platform: ${os.platform()}`);
   console.log(`Architecture: ${os.arch()}`);
   console.log(`Hostname: ${os.hostname()}`);
   console.log(`Operating System: ${os.type()}`);
   console.log(`Release: ${os.release()}`);
   ```

2. **Getting System Uptime:**

   ```javascript
   const os = require('os');

   const uptimeInSeconds = os.uptime();
   const uptimeInMinutes = uptimeInSeconds / 60;
   const uptimeInHours = uptimeInMinutes / 60;

   console.log(`Uptime: ${uptimeInSeconds} seconds`);
   console.log(`Uptime: ${uptimeInMinutes} minutes`);
   console.log(`Uptime: ${uptimeInHours} hours`);
   ```

3. **Getting CPU Information:**

   ```javascript
   const os = require('os');

   const cpus = os.cpus();
   console.log(`Number of CPUs: ${cpus.length}`);

   cpus.forEach((cpu, index) => {
     console.log(`CPU ${index + 1}:`);
     console.log(`  Model: ${cpu.model}`);
     console.log(`  Speed: ${cpu.speed} MHz`);
     console.log(`  Times:`, cpu.times);
   });
   ```

4. **Getting Memory Information:**

   ```javascript
   const os = require('os');

   const totalMemory = os.totalmem();
   const freeMemory = os.freemem();

   console.log(`Total Memory: ${totalMemory / (1024 * 1024)} MB`);
   console.log(`Free Memory: ${freeMemory / (1024 * 1024)} MB`);
   ```

5. **Getting Network Interfaces:**

   ```javascript
   const os = require('os');

   const networkInterfaces = os.networkInterfaces();

   console.log('Network Interfaces:');
   console.log(networkInterfaces);
   ```

The `os` module provides a wide range of information about the host operating system, which can be useful for various purposes, including system monitoring, resource management, and platform-specific behavior in your Node.js applications.

# path Module In nodejs

The `path` module in Node.js is a built-in module that provides utilities for working with file and directory paths. It helps you work with file paths in a way that's platform-agnostic, ensuring compatibility across different operating systems, which may have different conventions for representing paths (e.g., Windows uses backslashes while Unix-based systems use forward slashes).

Here are some common functions and methods provided by the `path` module:

1. **`path.join([...paths])`:** This method joins the given path segments into one complete path and normalizes the result. It takes any number of arguments, concatenates them, and returns a normalized path string. This is useful for constructing paths in a way that is consistent with the current operating system.

   ```javascript
   const path = require('path');

   const fullPath = path.join(__dirname, 'files', 'example.txt');
   console.log(fullPath);
   ```

2. **`path.resolve([...paths])`:** This method resolves an absolute path by considering the current working directory and the provided path segments. It returns an absolute path string.

   ```javascript
   const path = require('path');

   const absolutePath = path.resolve('mydir', 'subdir', 'file.txt');
   console.log(absolutePath);
   ```

3. **`path.basename(path, [ext])`:** This function returns the last portion of a path, optionally removing a file extension. It's useful for extracting the filename from a path.

   ```javascript
   const path = require('path');

   const filename = path.basename('/path/to/file.txt');
   console.log(filename); // Output: 'file.txt'
   ```

4. **`path.dirname(path)`:** This function returns the directory name of a path.

   ```javascript
   const path = require('path');

   const dirname = path.dirname('/path/to/file.txt');
   console.log(dirname); // Output: '/path/to'
   ```

5. **`path.extname(path)`:** This function returns the file extension of a path, including the dot.

   ```javascript
   const path = require('path');

   const extension = path.extname('/path/to/file.txt');
   console.log(extension); // Output: '.txt'
   ```

6. **`path.parse(pathString)`:** This function parses a path into an object with properties like `root`, `dir`, `base`, `ext`, and `name`.

   ```javascript
   const path = require('path');

   const pathObj = path.parse('/path/to/file.txt');
   console.log(pathObj);
   ```

7. **`path.normalize(path)`**: This function normalizes a path, resolving '..' and '.' segments and converting slashes to the appropriate separator for the current operating system.

   ```javascript
   const path = require('path');

   const normalizedPath = path.normalize('/path/to/../file.txt');
   console.log(normalizedPath);
   ```

The `path` module is particularly useful when dealing with file and directory operations in a cross-platform manner, ensuring your code works consistently across different operating systems.

# Working with file in nodejs/ filesystem modules

The `fs` (File System) module in Node.js is a built-in module that provides methods for interacting with the file system. It allows you to perform various file-related operations such as reading from and writing to files, creating directories, deleting files, and more. Here are some common operations you can perform using the `fs` module:

1. **Reading Files:**

   - `fs.readFile(path, options, callback)`: Reads the contents of a file asynchronously.

   ```javascript
   const fs = require('fs');

   fs.readFile('file.txt', 'utf8', (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

2. **Writing Files:**

   - `fs.writeFile(file, data, options, callback)`: Writes data to a file asynchronously, creating the file if it doesn't exist or overwriting its contents if it does.

   ```javascript
   const fs = require('fs');

   fs.writeFile('file.txt', 'Hello, World!', 'utf8', (err) => {
     if (err) throw err;
     console.log('File written successfully.');
   });
   ```

3. **Creating Directories:**

   - `fs.mkdir(path, options, callback)`: Creates a new directory asynchronously.

   ```javascript
   const fs = require('fs');

   fs.mkdir('myDirectory', (err) => {
     if (err) throw err;
     console.log('Directory created successfully.');
   });
   ```

4. **Reading Directories:**

   - `fs.readdir(path, options, callback)`: Reads the contents of a directory asynchronously.

   ```javascript
   const fs = require('fs');

   fs.readdir('myDirectory', (err, files) => {
     if (err) throw err;
     console.log('Files in directory:', files);
   });
   ```

5. **Renaming and Moving Files:**

   - `fs.rename(oldPath, newPath, callback)`: Renames or moves a file or directory asynchronously.

   ```javascript
   const fs = require('fs');

   fs.rename('oldFile.txt', 'newFile.txt', (err) => {
     if (err) throw err;
     console.log('File renamed successfully.');
   });
   ```

6. **Deleting Files and Directories:**

   - `fs.unlink(path, callback)`: Deletes a file asynchronously.
   - `fs.rmdir(path, callback)`: Deletes an empty directory asynchronously.
   - `fs.rm(path, options, callback)`: Deletes files and directories asynchronously (Node.js 14.14.0 and later).

   ```javascript
   const fs = require('fs');

   fs.unlink('fileToDelete.txt', (err) => {
     if (err) throw err;
     console.log('File deleted successfully.');
   });
   ```

7. **Checking File and Directory Existence:**

   - `fs.existsSync(path)`: Synchronously checks if a file or directory exists.

   ```javascript
   const fs = require('fs');

   if (fs.existsSync('file.txt')) {
     console.log('File exists.');
   } else {
     console.log('File does not exist.');
   }
   ```

The `fs` module provides a wide range of functions for handling file and directory operations in your Node.js applications. It's important to handle errors appropriately when working with the file system to ensure robustness in your code. Many of the methods in the `fs` module support both synchronous and asynchronous versions, allowing you to choose the appropriate approach based on your application's requirements.

## Raw Code

```js
const fs= require("fs");
const path = require("path")

// // Read a file async
fs.readFile(path.join(__dirname, "files", "starter.txt"),"utf8",(err, data)=>{
    if(err) throw err;
    console.log(data);
})

// // write a file async
fs.writeFile(path.join(__dirname,"files", "write.txt"),"Nice to meet you Avinash",(err)=>{
    if(err) throw err;
    console.log("Write to file is complete");
})

// // append to a file async
fs.appendFile(path.join(__dirname, "files","write.txt"),"\nHey avinash can you do it for me",(err)=>{
    if(err) throw err;
    console.log("Append operation complete to write.txt");
})

// // create a file and then append 
fs.writeFile(path.join(__dirname,"files", "createAndAppend.txt"), "This text is when created",(err)=>{
    if(err) throw err;
    console.log("created the file");
    // now we will append 
    fs.appendFile(path.join(__dirname,"files","createAndAppend.txt"),"\nHey i am also appending this to the created file",(err)=>{
        if(err) throw err;
        console.log("created then appended");
    })
})

// create a file then append and then rename the file
fs.writeFile(path.join(__dirname,"files","created.txt"),"Created a file",(err)=>{
    if(err) throw err;
    console.log("created a file created.txt");
    // now append to created.txt
    fs.appendFile(path.join(__dirname,"files","created.txt"),"\nI am appended to created.txt",(err)=>{
        if(err) throw err;
        console.log("appended to created.txt");
        // now we are going to rename the file
        fs.rename(path.join(__dirname,"files","created.txt"), path.join(__dirname, "files","createdAppendedRenamed.txt"),(err)=>{
            if(err) throw err;
            console.log("File Created the appended and then Renamed");
        })
    })
})// now this is called callback hell

// exit on uncaught error
process.on("uncaughtException",(err)=>{
    console.error("there was an uncaught error",err);
    process.exit(1)
})
```

## Deal with Callback Hell

```js
// we will read file in such a way we can avoid callback hell
const fileOps = async ()=>{
    try {
        console.log("Trying to read the file");
        const data = await fsPromises.readFile(path.join(__dirname,"files","starter.txt"),"utf8");
        await fsPromises.writeFile(path.join(__dirname,"files","synFile.txt"),data);
        // read data from lorem.txt and append that to 
        const loremData = await fsPromises.readFile(path.join(__dirname,"files","lorem.txt"),"utf8"); 
        await fsPromises.appendFile(path.join(__dirname,"files","synFile.txt"),loremData);
        // read the final result
        const res = await fsPromises.readFile(path.join(__dirname,"files","synFile.txt"),"utf-8");
        console.log("res = ", res);
    } catch (err) {
        console.error(err);
    }
}

fileOps();
```

## Stream in Node js

In Node.js, a stream is a powerful and efficient abstraction for working with data, especially when dealing with large amounts of data or data that arrives incrementally over time. Streams provide a way to read from or write to data sources or destinations in a continuous, sequential manner. Streams are implemented in Node.js as instances of the `Stream` core module, and there are four types of streams in Node.js:

1. **Readable Streams:** Readable streams are used for reading data from a source, such as a file or an HTTP request. They provide methods and events for reading data incrementally as it becomes available. Common examples of readable streams include file reads and HTTP request responses.

   ```javascript
   const fs = require('fs');
   const readableStream = fs.createReadStream('file.txt');
   
   readableStream.on('data', (chunk) => {
     // Process the data chunk as it arrives
     console.log(chunk);
   });
   ```

2. **Writable Streams:** Writable streams are used for writing data to a destination, such as a file or an HTTP request. They provide methods for writing data in chunks. Common examples of writable streams include file writes and HTTP request bodies.

   ```javascript
   const fs = require('fs');
   const writableStream = fs.createWriteStream('output.txt');
   
   writableStream.write('Hello, ');
   writableStream.write('World!');
   writableStream.end();
   ```

3. **Duplex Streams:** Duplex streams are both readable and writable, meaning they can be used for both reading and writing data. An example of a duplex stream is a TCP socket.

   ```javascript
   const net = require('net');
   const server = net.createServer((socket) => {
     // Socket is a duplex stream
     socket.write('Hello, client!');
     socket.pipe(socket); // Echo back data from the client
   });
   
   server.listen(3000);
   ```

4. **Transform Streams:** Transform streams are a special type of duplex stream that allows you to modify or transform data as it's read and written. They are often used for tasks like data compression or encryption.

   ```javascript
   const fs = require('fs');
   const zlib = require('zlib');
   const readableStream = fs.createReadStream('file.txt');
   const gzip = zlib.createGzip();
   const writableStream = fs.createWriteStream('file.txt.gz');
   
   readableStream.pipe(gzip).pipe(writableStream);
   ```

Streams provide several advantages, including:

- **Efficiency:** Streams allow you to work with data in chunks, which can significantly reduce memory usage, especially when dealing with large files or network data.

- **Pipelining:** You can easily connect streams together using the `.pipe()` method to create complex data processing pipelines.

- **Backpressure Handling:** Streams automatically handle backpressure, ensuring that data isn't overwhelmed or lost when reading or writing data at different rates.

- **Event-Based:** Streams emit events, allowing you to respond to data as it becomes available or as it's consumed.

- **Modularity:** Streams encourage modular and reusable code, as you can connect and reuse streams in different parts of your application.

Streams are a fundamental concept in Node.js and are widely used in various modules and libraries for tasks like file I/O, network communication, data transformation, and more. Understanding how to work with streams is essential for building efficient and scalable Node.js applications.

## Raw Example of Sream 

```js
const fs = require("fs");
const path = require("path");

// Create a Readable Stream
const rs = fs.createReadStream(path.join(__dirname,"files","lorem.txt"),{encoding:"utf8"});

// Create a write Stream
const ws = fs.createWriteStream(path.join(__dirname,"files","loremStream.txt"),{encoding:"utf8"});

// For chunk file with smaller size it is efficient  
rs.on("data", (dataChunk)=>{
    ws.write(dataChunk);
})

// For very large chunk file use pipe it is more efficient( from experience)
rs.pipe(ws);
```

## Events in Nodejs

Events are a core concept in Node.js, and they form the basis for building asynchronous and event-driven applications. In Node.js, the built-in `events` module provides an event emitter that allows you to create, emit, and listen for events. Here's an overview of how events work in Node.js:

1. **Events and Event Emitters:**
   - Events represent a way for objects in Node.js to signal that something has happened. These objects are typically instances of the `EventEmitter` class.
   - Event emitters can emit named events, and other objects can register functions (listeners) to be executed when a specific event is emitted.

2. **Using the `events` Module:**
   - To work with events in Node.js, you need to require the built-in `events` module.
   - You can create an event emitter instance by creating an object from the `EventEmitter` class.
   
   ```javascript
   const EventEmitter = require('events');
   const myEmitter = new EventEmitter();
   ```

3. **Emitting Events:**
   - To emit an event, you use the `.emit()` method on an event emitter instance.
   
   ```javascript
   myEmitter.emit('eventName', arg1, arg2, ...);
   ```

4. **Listening for Events:**
   - To listen for an event, you use the `.on()` method (or its alias `.addListener()`) to register a listener function.
   
   ```javascript
   myEmitter.on('eventName', (arg1, arg2, ...) => {
     // Handle the event here
   });
   ```

5. **Once Listeners:**
   - You can use the `.once()` method to register a listener that will be called only once for a particular event.
   
   ```javascript
   myEmitter.once('eventName', () => {
     // This listener will be executed only once
   });
   ```

6. **Passing Data with Events:**
   - You can pass data along with emitted events by including arguments when you call `.emit()`. These arguments will be received by the listener function.

   ```javascript
   myEmitter.on('greet', (name) => {
     console.log(`Hello, ${name}!`);
   });

   myEmitter.emit('greet', 'John'); // Output: Hello, John!
   ```

7. **Error Events:**
   - In Node.js, error events are a special type of event. If you emit an 'error' event without a registered listener, it will throw an unhandled exception, terminating your program. It's recommended to always register an error listener.

   ```javascript
   myEmitter.on('error', (err) => {
     console.error('Error occurred:', err);
   });
   ```

Events play a crucial role in many Node.js modules and libraries, including HTTP servers, file streams, and more. They are the foundation of asynchronous and event-driven programming in Node.js, allowing you to build scalable and responsive applications that can handle multiple concurrent events and operations.

## Example of event

index.js
```js 
const {logEvents} = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize the object 
const myEmitter = new MyEmitter();

// add a listener for log event
myEmitter.on("log",(msg)=> logEvents(msg));

// Etit event for some time

setTimeout(()=>{
    myEmitter.emit("log","Log Message emitted")
},[3000])

```

logEvents.js

```js
const { format } = require("date-fns");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const {v4: uuid} = require("uuid");

const logEvents = async (message)=>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `\n${dateTime}\t${uuid()}\t ${message}`
    console.log(logItem);
    try {
        if (fs.existsSync(path.join(__dirname, "logs"))){
            await fsPromises.appendFile(path.join(__dirname, "logs","eventsLog.txt"), logItem)
        }else{
            await fsPromises.mkdir(path.join(__dirname,"logs"));
            await fsPromises.appendFile(path.join(__dirname, "logs", "eventsLog.txt"), logItem)
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {logEvents}
```

# Create a Web Server in nodejs

