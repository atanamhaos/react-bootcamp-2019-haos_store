const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

const port = 8080;
const watchdir = '../movie_data-client-r1/build/';
const mockapiurl = 'http://5c99df5a1a4c360014a0ffc1.mockapi.io/bootcamp';

app.use(express.static(`${watchdir}`));
app.use(bodyParser.json());

let app_data = [{
    appName: 'movie_data',
    searches: [{ search_string: 'test' }],
}];

let response_json = {
    status: false,
    payload: app_data,
};

// * [mockAPI](https://www.mockapi.io/projects/5c99df5a1a4c360014a0ffc2)
let test = `${mockapiurl}/searches`;

app.get("/searches", (request, response) => {
    console.log(test);
    axios.get(`${mockapiurl}/searches`)
        .then(resp => {
            console.log(resp);
            //app_data[0].workLogCards=resp.data;
            /*
            response.json({
                status: true,
                payload: app_data,
            });
            */
        })
        .catch(function(error) {
            // handle error
            //console.log('!!!!!!!!!!!!!!!!!error');
            console.log(error);
        });
    /*
     */

    response.json(response_json);
});


/*
app.post("/data", (request, response) => {
    let newCard = {
        project: request.body.project,
        description: request.body.description,
        time: request.body.time,
        cardNum: app_data[0].nextCardNum,
    };

    axios.post(`http://5c9928c0423656001439322b.mockapi.io/Logs`, newCard).then(resp => {
        console.log(resp.data);
        app_data[0].workLogCards = resp.data;
        response.json({
            status: true,
            payload: app_data,
        });
    });
*/

//app_data[0].workLogCards = [...app_data[0].workLogCards, newCard];
//app_data[0].nextCardNum = app_data[0].nextCardNum + 1;


/*
app.delete("/data/:indexToDelete", (request, response) => {

    let index = app_data[0].workLogCards.findIndex(card => card.cardNum == request.params.indexToDelete);

    app_data[0].workLogCards.splice(index, 1);

    //let longLine
    //console.log(longLine + index + longLine);

    axios.delete(`http://5c9928c0423656001439322b.mockapi.io/Logs/${index + 1}`).then(resp => {
        //console.log(resp);
        app_data[0].workLogCards = resp.data;
        response.json({
            status: true,
            payload: app_data,
        });
    });
*/



// axios.get(`http://5c9928c0423656001439322b.mockapi.io/log`).then(response => {
//     console.log(response);
// });


//});


app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
    for (var i = 0; i < 10; i++) console.log();
    if (process.env.C9_HOSTNAME !== '') {
        app._router.stack.forEach(function(r) {
            if (r.route && r.route.path) {
                console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
            }
        });
    }
    for (var i = 0; i < 10; i++) console.log();
});
