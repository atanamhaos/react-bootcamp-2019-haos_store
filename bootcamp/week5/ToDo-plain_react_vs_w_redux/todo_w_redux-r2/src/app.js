import React from 'react';
import TaskAdd from './components/TaskAdd.js';
import TaskList from './components/TaskList.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
      <TaskAdd/>
      <TaskList/>
      </div>
    );
  }
}

export default App;
