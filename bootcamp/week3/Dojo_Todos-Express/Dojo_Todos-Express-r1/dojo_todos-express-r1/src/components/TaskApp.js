import React from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskListFilter from './TaskListFilter';
import axios from 'axios';

class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      filteredList: [],
    };
  }

  filterTasks = (event) => {
    if (event.target.id === 'all') {
      this.setState({ filteredList: this.state.list });
    } else {
      let testArr = this.state.list.filter(list => list.status === `${event.target.id}`);
      this.setState({ filteredList: testArr });
    }
  }

  updateList = (updated_list) => {
    this.setState({ list: updated_list });
  }
  
  /* Make call on load to get initial data */
  componentDidMount(){
    axios.get('/todos')
      .then((response) => {
        this.setState({ list: response.data.payload });
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
      <div>
        <Header />
        <TaskInput parent_function={this.updateList} />
        <TaskList taskList={this.state.filteredList.length === 0 ? this.state.list : this.state.filteredList} />
        <TaskListFilter taskList={this.state.list} onClickEvent={this.filterTasks} />
      </div>
    );
  }
}

export default TaskApp;
