<div align="center">
<img src="https://miro.medium.com/max/1400/1*8ETcaw-gA1dYW4EFxqGK3w.png" width="150"/>
<h1>Complete NodeJs & Express</h1>
</div>

## 1. http Server

To Create a Basic Server we need to import `http` module first and then we have to use the method `createSever`.

- To send status code and content type we uses

  ```js
  res.writeHead(200, { "content-type": "text/html" });
  ```

  - You can sent html by using content type text/html
  - for svg content-type : text/svg+xml
  - for styles as content : text/css
  - for javascript as content : text/javascript

  and We can search on google as we need

- to send the content we use
  ```js
  res.write(home);
  ```
- to use home we first have to read the home using readFileSync method in file-system (fs)

  ```js
  const home = readFileSync(./home.html)
  //for svg and other file we will do the same
  ```

- To end the response process we use another method
  ```js
  res.end();
  ```
- **For more detail look at** [this](./02-http-app.js)

Now We are cleared all the basics of http and ready to move to next topic that is express and nodejs

## 2. Express Server Basics

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

1. To get started with express we first have to install express

```npm
npm install express --save
```

2. Import express and make an instance of express normally called as app

   ```js
   const app = express();
   ```

   - Here as we instantiated express we just created a server and now we can directly write our routes

3. Create routes
   ```js
   app.get("/", (req, res) => {
     res.status(200).send("<h1>This is home</h1>");
   });
   ```
4. Create a route for 404

   ```js
   app.get("*", (req, res) => {
     res.send(404).send("<h1>Sorry page not found 404!</h1>");
   });
   ```

5. Assign a post to listen to

   ```js
   app.listen(5000, () => {
     console.log(`here you can specify the link`);
   });
   ```

   🔥 we just created a very cute express app
   for [more](./03-express-basics.js)

## 3. Express Middleware for using Static files

In http we used readFileSync to read the files and then send them as response body but express provides us a way to define a middleware such that we can tell express app that all of our static file is in some directory and we just have to use the path

1. To setup a middleware we have to use

   ```js
   app.use(express.static("./public"));
   ```

2. Now we can use all the static file inside static folder

   ```js
   res.sendFile(path.resolve(__dirname, "./index.html"));
   ```

3. To handle the error we have new method in app

   ```js
   app.all("*", (req, res) => {
     res.status(404).send("sorry page not found");
   });
   ```

## 4. Express and Json Data

In express to send json data there is a method called as `res.json`

1. We need to import the json data and then we have to send it as response
   ```js
   res.status(200).json(data);
   ```

## 5. Query Parameters

Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content

> http://127.0.0.1:8000/items/?skip=0&limit=10

- Here skip and limit is a query parameter
- these prams are used to access the data as we want

1. To set Query Prams we just have to add special syntax

   ```js
   app.get("/api/students/   :studentID", (req, res) => {
     const { studentID } = req.prams;
   });
   ```

2. To access the query prams the method is

## 6. Express Middleware use method

As in name middle comes it is a function comes between request and response

1. write the method to be used as middleware and then call next();

   ```js
   const mw = (req, res, next) => {
     const method = req.method;
     console.log(method);
     next();
   };
   ```

   - 🌄 **If you will not call next inside your middleware then page will never load**

2. To use the middleware you have to use the method provided by express to use it

   ```js
   app.use([mw]);
   //then the logic
   ```

3. Middleware will work for those routes which is below it those routes which is above it will go without middleware

   ```js
   app.get("/", (req, res) => {
     res.send("it will run without using middleware");
   });
   app.use([mw]);
   app.get("/about", (req, res) => {
     res.send("this will run after the execution of middleware");
   });
   ```

## 7. Express and Morgan

Morgan is a logger which gives developer an insight of what is the request and many more

1. install morgan from npm

   ```
   npm i morgan
   ```

2. import morgan and add it as middleware

   ```js
   const morgan = require("morgan");
   app.use(morgan("tiny"));
   ```

## 8. Express Methods
