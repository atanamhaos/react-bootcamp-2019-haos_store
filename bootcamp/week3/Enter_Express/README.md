# Enter Express

* [Enter Express | Express.js](http://learn.codingdojo.com/m/19/4723/33867)

## What is Express?

**Express.js** is a framework built in Javascript using Node.js as the server component.  It is also the **E** in the **MEAN** stack, so it must be important! Unlike most other MVC frameworks (like Codeigniter and Rails), **Express isn't exclusively MVC.** It's actually more so just a set of tools that allows us to create a more robust Node Server. There are a few different ways to build an MVC framework with Express, and **we will eventually show you how we do it**. However, we believe the best way to learn **Express** is to start with the basics before working our way up.

## Your first Express project:

Create a folder called "Hello_Express" and give it a file called "server.js". This file will be our Node server file.

Since Express is a node module, run npm `install express` while in the Hello_Express directory.

Note: If you are on a Mac you may need to run this command as sudo. 

All that this did was go out and install the express module (as well as all of the modules that express is dependent on) in your project folder. Your project folder should now contain a big new scary "node_modules" folder in addition to your server.js file! Feel free to poke around and see what is inside, but do not delete or change anything. Try to trace where require("express") from our server.js code goes and what it comes back with.

### Hello_Express/server.js

```
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
```

Run the server.js file using node (but use nodemon, it will make your life easier) and see the magic happen!

```
nodemon server.js
```
