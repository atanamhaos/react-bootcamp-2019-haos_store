const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8080;
const watchdir = 'build/';

app.use(express.static(`${watchdir}`));
app.use(bodyParser.json());

const appData = [{
    appName:'GitHub_Score',}];

/* route for data retrieval */
app.get("/data", (request, response) => {
    response.json({
        payload: appData,
        status: true
    });
});

/* route for data additions
app.post("/posttodos", (request, response) => {
    todos.push({
        task: request.body.list_item,
        status: 'active',
    });
    response.json({
        status: true,
        todos: todos
    });
});
*/

// C9_HOSTNAME
app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    //console.log(`process.env.C9_HOSTNAME =  ${process.env.C9_HOSTNAME}`);
    if (process.env.C9_HOSTNAME !== '') {
        app._router.stack.forEach(function(r) {
            if (r.route && r.route.path) {
                console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
            }
        });
    }
});
