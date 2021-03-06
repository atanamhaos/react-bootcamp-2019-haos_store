// npm install --save express cors
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// This seems to deal with the CORS problem...
app.use(cors());
app.options('*', cors());

function determineGoldReturned(high, low) {
    // Source : https://www.w3schools.com/js/js_random.asp & https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_function
    let goldReturned = Math.floor(Math.random() * (high - low)) + low;
    let data = {
        goldreturn:goldReturned,
    };
    return data;
}

app.get('/farm', function(req, response, next) {
    response.send(determineGoldReturned(2, 5));
});

app.get('/cave', function(req, response, next) {
    response.send(determineGoldReturned(5, 10));
});

app.get('/casino', function(req, response, next) {
    response.send(determineGoldReturned(-100, 100));
});

app.get('/haos', function(req, response, next) {
    response.send(determineGoldReturned(7, 15));
});

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path && (r.route.path !== '*')) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
