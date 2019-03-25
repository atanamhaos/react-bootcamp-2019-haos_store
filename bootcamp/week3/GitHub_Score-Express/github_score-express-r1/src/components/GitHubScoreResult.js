import React from 'react';

const GitHubScoreResult = (props) => {

    let result_display = '';

    if (props.search_results.queriedUser === '') {
        result_display = '';
    }
    else {
        if (props.search_results.userExists) {
            let userScore = 0;
            
            userScore = props.search_results.usersNumOfRepos + props.search_results.usersNumOfFollowers;

            let scoreMessage = ``;
            let scoreMessageStyle = {};
            if (userScore < 20) {
                scoreMessage = 'Needs Work!';
                scoreMessageStyle = { color: 'red', };
            }
            else if (userScore < 50) {
                scoreMessage = 'Doing Good!';
                scoreMessageStyle = { color: 'orange', };
            }
            else if (userScore < 100) {
                scoreMessage = 'Great Job!';
                scoreMessageStyle = { color: 'black', };
            }
            else if (userScore <= 200) {
                scoreMessage = 'Great Job!';
                scoreMessageStyle = { color: 'green', };
            }
            else {
                scoreMessage = 'GitHub Elite!';
                scoreMessageStyle = { color: 'blue', };
            }

            result_display = <div>
                             <h2>{props.search_results.queriedUser} </h2>
                                 <br></br>
                                 <h1>score : {userScore}</h1>
                                 <br></br>
                                 <h2 style={scoreMessageStyle}>{scoreMessage}</h2>
                             </div>;
        }
        else {
            result_display = <p>user does not exists</p>;
        }
    }

    /*
      border: '2px solid green',
    */
    let simpleStyle = {
        width: '45%',
        float: 'right',
    };

    return (
        <div id="result_div" style={simpleStyle}>
      {result_display}
      </div>
    );
};

export default GitHubScoreResult;
