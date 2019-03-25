import React from 'react';

class GitHubScoreSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_query:''};
  }
  
  handleChange = (event) => {
     this.setState({search_query:event.target.value});
  }

  submit_function = (event) => {
     event.preventDefault();
     if (this.state.search_query) {
        this.props.search_function(this.state.search_query); 
     } else {
        this.props.search_function('koreahaos'); 
     }
     this.setState({search_query:''});
  }

  search_submit_button = () => {
    return (
      <div id='search_button'>
      <button name='search_submit' disabled={this.state.search_query ? false : false}>Calculate user's GitHub Score</button>
      </div>
      );
  }

  search_input_field = () => {
    return (
      <div id='search_field'>
         <p>GitHub Username :&nbsp;
         <input type='text' name='search_query' value={this.state.user_input} onChange={this.handleChange}/>
         </p>
      </div>
      );
  }
  
  search_form = () => {
    return (
      <div id='search_field'>
         <form onSubmit={this.submit_function}>
         {this.search_input_field()}
         {this.search_submit_button()}
         </form>
      </div>
      );
    
  }

   componentStyle = () => {
    /*
      border: '2px solid green',
    */
    const simpleStyle = {
      width: '45%',
      float: 'left',
    };
    return simpleStyle;
  }
  
  render() {
    return (
        <div id="search_form" style={this.componentStyle()}>
        <h1>GitHub Score</h1>
        {this.search_form()}
      </div>
    );
  }
}

export default GitHubScoreSearch;
