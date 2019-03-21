import React from 'react';

class MovieSearch extends React.Component {
  constructor(props){
      super(props);
      this.state={
          user_input:'',    
      };
  }
  
  handleChange = (event) => {
     this.setState({user_input:event.target.value});
  }
  
  search_query = (e) => {
     e.preventDefault();
     this.props.parent_function(this.state.user_input); 
     this.setState({user_input:''});
  }
  
  render() {
    console.log();
    return (
      <div id="movie_search">
       {/* ToDo: add search magnifier to search field. */}
       <form onSubmit={this.search_query} >
       <input type='text' name='movie_search' value={this.state.user_input} onChange={this.handleChange}/>
       <button name='Search_submit' disabled={this.state.user_input ? false : true}>search</button>
       </form>
      </div>
    );
  }
}

export default MovieSearch;
