var axios = require('./axios');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
//console.log(axios);
/*
 */
axios.get(`https://react-bootcamp-2019-haos-store-r4-benjaminhaos.c9users.io/info`)
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
console.log('erro');
console.log(this);
        console.log(error);
    })
