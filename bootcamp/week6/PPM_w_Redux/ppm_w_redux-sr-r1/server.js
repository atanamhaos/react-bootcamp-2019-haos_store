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
        products: {
            111: { id:111, imageurl: '', price: '12.34', title: 'Test Product 1' },
            222: { id:222, imageurl: '', price: '43.12', title: 'Test Product 2' },
        },
        dataconfig: [
        { type: 'text', name: 'title', copi: 'Title :' },
        { type: 'number', name: 'price', copi: 'Price :' },
        { type: 'text', name: 'imageurl', copi: 'URL :' },
      ],
    }
};
  
let formConfig = [
        { type: 'text', name: 'title', copi: 'Title' },
        { type: 'number', name: 'price', copi: 'Price' },
        { type: 'text', name: 'imageurl', copi: 'Image URL' },
      ];

app.get('/', function(req, response, next) {
    response.send(returnObject);
});

// app.get('/products', function(req, response, next) {
//     response.send(returnObject);
// });

// app.get('/config', function(req, response, next) {
//     response.send(formConfig);
// });

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path && (r.route.path !== '*')) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
