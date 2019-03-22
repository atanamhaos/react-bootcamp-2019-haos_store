import React from 'react';

const GitHubScoreResult = (props) => {

    let result_display = '';
    
    if (props.search_results.queriedUser === '') {
        result_display =  '';
    } else {
        if (props.search_results.userExists) {
            let userScore = 0;
            userScore = props.search_results.usersRepos.length + props.search_results.usersfollowers.length;

            result_display =  <p>user : {props.search_results.queriedUser} <br></br> score : {userScore}</p>;
        } else {
            result_display =  <p>user does not exists</p>;
        }
    }
    
    return (
      <div id="result_display">
      {result_display}
      </div>
    );
};

export default GitHubScoreResult;
