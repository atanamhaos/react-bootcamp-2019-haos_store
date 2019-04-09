// npm install --save express cors
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// This seems to deal with the CORS problem...
app.use(cors());
app.options('*', cors());

let returnObject = {
    data: {
        key1: 'value1',
        key2: 0,
        anotherkey: 'reallylongstringwith onlyonespace',
        keyforobject: { objectsfirstkey: 'kwikset', objectsecondkey: 'shlage', numberofkeysobjecthas: 3 },
    }
};

app.get('/', function(req, response, next) {
    response.send(returnObject);
});

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path && (r.route.path !== '*')) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
