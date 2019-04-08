const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

let testobject = {data:'Hello World!'};
let testobject2 = {data:'Hello API World!'};

// This seems to deal with the CORS problem...
app.use(cors())
app.options('*', cors())

app.get('/', function(req, response, next) {
  response.send(testobject);
});

const initialState = {
    persons: [
        { id: '001', name: 'Melissa', listdata: ['feline husbandry'], },
        { id: '002', name: 'Yoseph', listdata: [], },
        { id: '003', name: 'Jeremy', listdata: ['testing code'], },
        { id: '004', name: 'Jeff', listdata: ['child rearing', ' gameing', 'foodie'], },
        { id: '005', name: 'Caleb', listdata: ['feline husbandry', ' inovation', ' comedy'], },
        { id: '006', name: 'Zachary', listdata: ['baseball', ' frugality'], },
        { id: '007', name: 'Swapna', listdata: ['child rearing'], },
        { id: '008', name: 'Durga', listdata: ['child rearing, child creation, electronics'], },
        { id: '009', name: 'Benjamin', listdata: ['creation', 'electronics', 'hacking', ], },
        { id: '010', name: 'Speros', listdata: ['teaching', 'coding', 'entrepreneurship', 'hiking', ], },
    ],
    addTabField: '',
    addDetailField: '',
    selectedTab: '000',
};

app.get('/initstate/', function(req, response, next) {
  response.send(initialState);
});

app.listen(port, () => {
    console.log(`Server Starting on port ${port}`);
    app._router.stack.forEach(function(r) {
        if (r.route && r.route.path) {
            console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
        }
    });
});
