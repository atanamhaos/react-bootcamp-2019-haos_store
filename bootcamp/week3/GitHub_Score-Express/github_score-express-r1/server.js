const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 8080;
const watchdir = 'build/';

app.use(express.static(`${watchdir}`));
app.use(bodyParser.json());

let app_data = [{
    appName: 'GitHub_Score',
    queried_user: '',
    queried_user_exists: false,
    queried_users_num_of_repos: 0,
    queried_users_num_of_followers: 0,
}];

app.get("/data/:username", (request, response) => {

    if (app_data[0].queried_user !== request.params.username) {
        app_data[0].queried_user = request.params.username;
        app_data[0].queried_user_exists = false;
        app_data[0].queried_users_num_of_repos = 0;
        app_data[0].queried_users_num_of_followers = 0;
    }


    query_github_for_user(request.params.username, response);

    /*
    setTimeout(() => {
        response.json({
            status: true,
            payload: app_data,
        });
    }, 3000);
    */
    //console.log('app.get finishes.');
});



function returnResponse(response) {
    response.json({
        status: true,
        payload: app_data,
    });
}

function create_object_w_data_for_github_score(username, response) {
        
}

function query_github_for_user(username, response) {
    //console.log('username = ' + username);
    const ghUserApiURL = 'https://api.github.com/search/users?q=';

    axios.get(`${ghUserApiURL}${username}`)
        .then((response) => {
            if (response.data.items.length > 0) {
                app_data[0].queried_user_exists = true;
                getDataForScore(username, response);
            }
            else {
                app_data[0].queried_user_exists = false;
                returnResponse(response);
            }
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
}

function getDataForScore(username) {
    getUsersRepos(username);
    getUsersFollowerState(username);
}

function getUsersRepos(username) {
    let ghUsersReposApiURL = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(`${ghUsersReposApiURL}`)
        .then((response) => {

            let userDataObject = response.data;
            app_data[0].queried_users_num_of_repos = userDataObject.length;
            /* Deal w. users having more than 100 repos */
            if (response.data.length > 99) {
                ghUsersReposApiURL = `https://api.github.com/users/${username}/repos?per_page=100&page=2`;
                axios.get(`${ghUsersReposApiURL}`)
                    .then((response) => {
                        let concatedUserReposArray = userDataObject.concat(response.data);
                        app_data[0].queried_users_num_of_repos = concatedUserReposArray.length;
                    })
                    .catch(function(error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function() {
                        // always executed
                    });
            }
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}

function getUsersFollowerState(username) {
    let ghUsersFollowersApiURL = `https://api.github.com/users/${username}/followers`;

    axios.get(`${ghUsersFollowersApiURL}`)
        .then((response) => {
            app_data[0].queried_users_num_of_followers = response.data.length;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
    if (process.env.C9_HOSTNAME !== '') {
        app._router.stack.forEach(function(r) {
            if (r.route && r.route.path) {
                console.log(`C9 serves at : https://${process.env.C9_HOSTNAME}${r.route.path}`);
            }
        });
    }
});
