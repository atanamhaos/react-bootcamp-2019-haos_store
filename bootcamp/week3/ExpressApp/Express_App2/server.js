const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8080;
const watchdir = 'express_app_2/build/';

app.use(express.static(`${watchdir}`));
app.use(bodyParser.urlencoded({ extended: true }));

const notes = [
    { id: 1, title: 'first object' },
    { id: 2, title: 'second object' },
    { id: 3, title: 'third object' },
];

app.get("/", (request, response) => {
    response.json({
        payload: notes,
        status: true
    });
});

//https://react-bootcamp-2019-haos-store-r2-benjaminhaos.c9users.io:8080/notes

app.get("/notes", (request, response) => {
    console.log('recieved GET request:');
    response.json({
        payload: notes,
        status: true
    });
});

// C9_HOSTNAME
console.log(process.env.C9_HOSTNAME);

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path) {
            //console.log(r.route.path);
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
