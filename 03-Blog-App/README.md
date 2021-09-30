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
