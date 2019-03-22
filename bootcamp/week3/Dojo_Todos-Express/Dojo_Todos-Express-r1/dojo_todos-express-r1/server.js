const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8080;
const watchdir = 'build/';

app.use(express.static(`${watchdir}`));
app.use(bodyParser.json());

//app.use(express.static(__dirname + "/dojo_todos-express-r1/build/"));
//app.use(bodyParser.urlencoded({ extended: true }));

const todos = [{ task: 'Absolutly anything', status: 'completed' },
    { task: 'be aware', status: 'active' },
    { task: 'call your mom', status: 'completed' },
    { task: 'do things somewhere', status: 'active' },
    { task: 'eat food', status: 'active' }
];

/* route for data retrieval */
app.get("/todos", (request, response) => {
    response.json({
        payload: todos,
        status: true
    });
});

/* route for data additions */
app.post("/posttodos", (request, response) => {
    todos.push({
        task: request.body.list_item,
        status: 'active',
    });
    response.json({
        status: true,
        todos: todos
    })
})

// C9_HOSTNAME
app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
