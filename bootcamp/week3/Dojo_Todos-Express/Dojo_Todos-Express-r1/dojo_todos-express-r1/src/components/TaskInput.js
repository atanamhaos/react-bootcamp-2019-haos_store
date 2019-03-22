import React from 'react';
import axios from 'axios';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_item:'',
    };
  }

  handleChange = (event) => {
    this.setState({list_item:event.target.value});     
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/posttodos", {list_item:this.state.list_item})
      .then((response) => {
        this.props.parent_function(response.data.todos);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    
      this.setState({list_item:''});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.list_item} />
    </form>
    );
  }
}

export default TaskInput;
