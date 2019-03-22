import React, { Component } from 'react';
import TaskApp from './components/TaskApp';

class App extends React.Component {
  render() {
console.log('running');
    return (
      <div className="App">

        <TaskApp />
      </div>
    );
  }
}

export default App;
