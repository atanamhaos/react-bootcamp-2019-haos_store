import React from 'react';
import axios from 'axios';
import GitHubScoreSearch from './GitHubScoreSearch.js';
import GitHubScoreResult from './GitHubScoreResult.js';

class GitHubScoreApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queriedUser: '',
      userExists: null,
      usersData: {},
      usersRepos: [],
      usersfollowers: [],
    };
  }

  getDataForScore = (userName) => {
    this.getUsersRepos(userName);
    this.getUsersFollowerState(userName);
  }

  getUsersRepos = (userName) => {
    let ghUsersReposApiURL = `https://api.github.com/users/${userName}/repos?per_page=100`;

    axios.get(`${ghUsersReposApiURL}`)
      .then((response) => {
        this.setState({ usersRepos: response.data });

        /* Deal w. users having more than 100 repos */
        if (response.data.length > 99) {
          ghUsersReposApiURL = `https://api.github.com/users/${userName}/repos?per_page=100&page=2`;
          axios.get(`${ghUsersReposApiURL}`)
            .then((response) => {
              let concatedUserReposArray = this.state.usersRepos.concat(response.data);
              this.setState({ usersRepos: concatedUserReposArray });
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

  getUsersFollowerState = (userName) => {
    let ghUsersFollowersApiURL = `https://api.github.com/users/${userName}/followers`;

    axios.get(`${ghUsersFollowersApiURL}`)
      .then((response) => {
        this.setState({ usersfollowers: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  search_function = (search_query) => {
    const ghUserApiURL = 'https://api.github.com/users/';
    let userName = `${search_query}`;

    axios.get(`${ghUserApiURL}${userName}`)
      .then((response) => {
        console.log(response);
        if (response.data.items.length > 0) {
          this.setState({ queriedUser: search_query, userExists: true, usersData: response.data.items });
          this.getDataForScore(userName);
        }
        else {
          this.setState({ queriedUser: search_query, userExists: false, usersData: {} });
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

  appStyle = () => {
    /*
      border: '2px solid black',
    */
    const simpleStyle = {
      width: '90%',
      height: '200px',
    };
    return simpleStyle;
  }

  render() {

    return (
      <div id="app_wrapper" style={this.appStyle()}>
      <GitHubScoreSearch search_function={this.search_function}/>
      <GitHubScoreResult search_results={this.state}/>
      </div>
    );
  }
}

export default GitHubScoreApp;
