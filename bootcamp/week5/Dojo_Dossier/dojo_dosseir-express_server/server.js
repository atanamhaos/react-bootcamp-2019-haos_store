const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

let testobject = {data:'Hello World!'};

// This seems to deal with the CORS problem...
app.use(cors())
app.options('*', cors())

app.get('/', function(req, response, next) {
  response.send(testobject);
});

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
