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
    let ghUsersReposApiURL = `https://api.github.com/users/${userName}/repos`;

    axios.get(`${ghUsersReposApiURL}`)
      .then((response) => {
        //console.log(response);
        //console.log(response.data.items);
        this.setState({ usersRepos: response.data });
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
    const ghUserApiURL = 'https://api.github.com/search/users?q=';
    let userName = `${search_query}`;

    axios.get(`${ghUserApiURL}${userName}`)
      .then((response) => {
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

  render() {
    return (
      <div id="app_wrapper">
      <h1>GitHub Score</h1>
      <GitHubScoreSearch search_function={this.search_function}/>
      <GitHubScoreResult search_results={this.state}/>
      </div>
    );
  }
}

export default GitHubScoreApp;
