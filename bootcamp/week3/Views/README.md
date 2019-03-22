# Views

* [Views | Express.js](http://learn.codingdojo.com/m/19/4723/33868)

## What does the client see?

HTML/CSS/JS! Remember that the client only sees HTML/CSS/JS? Generally, there are two ways to serve HTML/CSS/JS -- through Static Content or Templates. 

**Static Content** -- Serving a static HTML/CSS/JS file from the backend in response to a request.

**Templates** -- Using a view/templating engine to generate HTML (PHP, embedded ruby, embedded JavaScript) 

## Serving Static Content

Remember that static content module you made in the Node.js chapter? Well, Express has one of its own that is really easy to use! Just like we wrote the instructions on how to handle the "/" route in our server.js file we are going to add a line that points our express server to a static files folder.

First create a new folder inside your project and call it "static" and place an HTML file called "main.html" in it. Add some content to the file so you can see it render!

Next open your server.js file and let's tell our server to use a static file folder to handle requests for static content!

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
Now after restarting the server, you should see the HTML page you created when you navigate to "localhost:8000/main.html". It is important to note that now all of your static content must go in the static folder including styles and static javascript files. Try adding a CSS file to show that you really understand how the static content works! 

Using Templates (EJS)
EJS is the templating engine we are going to use. EJS stands for Embedded Javascript. Just like express, ejs is a node module that we will need to install for our project. 

First let's install the ejs module in our project.

npm install ejs
Next let's tell express that we are going to use ejs:

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
Let's say we wanted to add a route to our app that displays a list of users. We aren't going to get our list of users from the database, we're just going to hard code our data for now. Let's add a new route to our server.js file that will render an ejs view and pass it some user data.

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
Notice we are passing a JavaScript object to the response.render() method. That way, when we pass a piece of data to a view, every key-value pair within the larger piece of data becomes its own variable.  

Let's create a new folder called "views" in our project directory. This folder is where we are going to put all of our view files.

Next let's make a view called  users.ejs and put in it the following:

<html>
<body>
    <h2>Here are all the users:</h2>
    <% for (var x in users) { %>
        <h3>Name: <%= users[x].name %></h3>
        <h4>Email: <%= users[x].email %></h4>
        <hr>
    <% } %>
</body>
</html>
The <% %> tags are the delimiter for the embedded JavaScript.  Using these tags allows us to run JavaScript code that can be embedded into the HTML document we are making.  Notice the <% %> tags allow us to enter JavaScript code, and the <%=  %> tags actually print the JavaScript code to the document.  This is a key difference.   You'll use the tags with the equal sign (=) to actually print values, whereas you'll use the tags without the equals sign to invoke loops or use logic (anything that involves JavaScript but doesn't output code).  Embedded JavaScript should be pretty quick to get up and running out of the box.  Play around with it and move on when you're ready!!