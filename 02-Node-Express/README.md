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

## 2. Express Server
