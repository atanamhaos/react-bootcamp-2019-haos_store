console.log('hi Ben');

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.github.com/users/benjaminhaos')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

