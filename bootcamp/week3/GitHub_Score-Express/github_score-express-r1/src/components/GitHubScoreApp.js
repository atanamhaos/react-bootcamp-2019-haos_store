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
      usersNumOfRepos: 0,
      usersNumOfFollowers: 0,
    };
  }

  search_function = (search_query) => {
    console.log('search_function search_query = ' + search_query);

    axios.get(`/data/${search_query}`)
      .then((response) => {

        this.setState({
          queriedUser: response.data.payload[0].queried_user,
          userExists: response.data.payload[0].queried_user_exists,
          usersNumOfRepos: response.data.payload[0].queried_users_num_of_repos,
          usersNumOfFollowers: response.data.payload[0].queried_users_num_of_followers,
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });

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
