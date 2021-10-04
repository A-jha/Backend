<div align="center">
<img src="https://jwt.io/img/logo-asset.svg" style="border: 2px solid white; border-radius:20px;margin:10px;" height="100" alt="jwt"/>
<h1>Nodejs and JWT</h1>
</div>

JWT is one way to implement authentication.

### To Install JWT uwe can use npm

```
npm i jsonwebtoken
```

## What are we going to build ?

We are going to build an application where we can add data and protect pages from un authenticated users

## 👍 dependencies

- ejs
- mongoose
- jsonwebtoken
- express

## 🏗️ Let's Build

### Initial Setup 😶

- create a server using express
- add ejs as `view engine`
- add public folder and make it static
- create a views folder where our ejs file will reside
- create a .gitignore and add node_modules and .env
- add MongoDB URI to .env
- import DB URI using process.env.DB_URI

### Auth Routes 🪂

- Using an MVC(model, view and controller) approach

- **Auth routes we will create in this project**

  | routes  | method | location                    |
  | ------- | ------ | --------------------------- |
  | /signup | GET    | sign up page                |
  | /login  | GET    | login page                  |
  | /signup | POST   | create a new user Page      |
  | /login  | POST   | authenticate a current user |
  | /logout | GET    | log out the user            |

## Routers

All different types of routes will go inside this folder and when we want to use it then we can call it inside server file by adding

```js
js app.use(authRoutes);
```

or we can specify the routes

```js
app.use("/auth", authRoutes);
```

## Controller

All functionalities of each routes will reside inside controller

## Error Handling

To handle the error we have to get the error from the users validation error

But before that we have to declare error in mongoDB

- **Simple error declaration**

  ```js
  password:{
  type:String,
  unique:[true,"here we will write our error"]
  }
  ```

- **special type of error based on special conditions**

  ```js
  userSchema.path("password").validate(function (v) {
    if (this.password !== this.confirmPassword) {
      this.invalidate("confirmPassword", "Password do not matches.");
    }
  });
  ```

  This function will validate if password and confirm password matches or not if password do not match then it will throw an error

- **Fetch all the errors and return it to developer**

While we get error then it will be in console and error has a message object and user validation error

- our work is to write a function which return all the errors in form of json

  ```js
  const handleError = (err) => {
    console.log(err.message, err.code);
    let errors = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    };
    //check for duplicate error
    if (err.code === 11000) {
      errors["email"] = "this email is already registered!";
      return errors;
    }
    //validation error
    if (err.message.includes("users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
    return errors;
  };
  ```

  This will return the error such that we can use it in frontend.

### 🛠️ Password Hashing using bcrypt

Normally hashing is a process of encrypting the private data such that it can not be used in malicious activities.

Node Package manager has a very good package to encrypt the string in a very efficient and good way and i.e. bcrypt.

- **General Hashing**
  there is some algorithm and that convert our string to some interesting string
  avinash123 ----------> @#$1234^&^&\*

- **bcrypt hashing**

  bcrypt provides us to add some secret key to the user string and it can go through the algorithm for as much time as we want.

  - additional string added by developer is called salt

## 🍭 Cookies

Store data in a users browser so that it can be used later form automatic authentication and many more.

when a request is sent to our server we can create a cookies and apply different methods on it

- we can set what type of data we want to store
- expiration time of cookies

Cookies are created and send back to browser now every time browser make some request to server browser will send cookies along with the request and user can be authorized.

- **Example:**

  ```js
  app.get("/set-cookies", (req, res) => {
    res.setHeader("set-Cookie", "nameUser=true");
    res.send("you got the cookies");
  });
  ```

- Cookies can be implemented easily with with the help of npm package cookie-parser

  ```js
  //cookies
  app.get("/set-cookies", (req, res) => {
    res.cookie("newUser", true, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: true,
      httpOnly: true,
    });
    res.cookie("isLoggedIn", false);
    //res.setHeader("set-Cookie", "nameUser=true");
    res.send("you got the cookies");
  });
  ```

- cookie-parser provides us the method to directly rad cookie in request

  ```js
  app.get("/read-cookie", (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
  });
  ```

## 🎟️ JSON WEB TOKEN (JWT)

Imagine we wnt to login to our application from the browser.

1. User will fill some kind of details and then submit the form which sends a request with email and password as request body.

2. Server then validate all those credentials using database if there is some error then server return error other wise

3. Server then create Json Web token for the user and send it to the browser where it can be stored in cookies

- The json web token contains encoded information about specific user and identify them

- cookies are send from browser to server on each request made by the user

- after jwt generation when user send any request to the server then sever can validate the user if jwt token is stored in cookies

- if jwt token is valid that means user is logged in and request can be successfully completed.

![jwt-process-img](https://i.ibb.co/3CN49jr/jwt.jpg)

### 🤨 Risk of Using JWT

It does potentially open up our site to cross site request forgery attack.

- in this case attacker steal the cookies generated for authentication and then send request with the help of that cookie.

### JWT Signing

- **Header**

  Tells the server what type of signature is being used (meta)

- **Payload**

  Used to identify the user (e.g. contains user id)

- **Signature**

  Makes the token secure (like a stamp of authenticity)
