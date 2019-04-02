import React, { Component } from 'react';
import ToDoParent from './container/ToDoParent';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* call the parent container */}
        <ToDoParent />
      </div>
    );
  }
}

export default App;
