const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


const notes = [
    {id:1, title:'first object'},
    {id:2, title:'second object'},
    {id:3, title:'third object'},
];

app.get("/notes", (request, response)=> {
    response.json({
        payload: notes,
        status: true
    })
})

app.listen(8080, () => {
    console.log("Server Starting")
});