# Markdown Blog App

## 🧑‍💻 Prerequisite

- Nodejs
- Express
- MongoDB
- ejs

## 🏗️ let's build Step By step

### Basic Setup

1.  Npm Packages

- express 🚋
- mongoose 📅
- ejs 💓
- marked
- method override...

2.  Create a server

    - import express and make an instance of it and then just call listen to 5000

3.  to use ejs we have to set our express view-engine as ejs and the the file inside views is accessible by the server directly
    - **set method is used**
    ```js
    app.set("view engine", "ejs");
    ```

### Basics of ejs

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

- pass the variable from nodejs and use it inside ejs

  ```html
  <%= variable_name %>
  ```

- pass variable in render method

  ```js
  res.render("index",{variable_name = "Avinash"})
  ```

- The variable passed from nodejs will be rendered on ejs

- **To put the html syntax from external resources**

  ```html
  <div><%- html-source %></div>
  ```

- **To Run a loop inside ejs as javascript**

  ```html
  <% articles.forEach((article)=>{%>
  <h1><%= article.title %></h1>
  <% }) %>
  ```

- to use some html in multiple file we can store the html snippet in some file and include it as we go

  ```html
  <div><%- include("_form_field") %></div>
  ```

  For more do visit [ejs](https://ejs.co/)

## All about nodejs in this project

1. Create a sever using express

2. use urlencoded for parsing data from form

3. To save data we used MongoDB

4. To write markdown we used npm package marked

5. To prevent malicious code we used dompurify and jsdom

6. To use method like put and delete we used npm package method-override

## How To Connect MongDB

1. Create a cluster
2. Create a .env file and add it to git ignore
3. install npm package dotenv
4. create a model where you can define your schema
5. now go to mongoDB and get the connection sting and inside connection string replace password with your password and database name with the database name

6. now use mongoose.connect method to connect
7. use newUrlParser to true and as you get any error rectify it

Thats all.
