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
