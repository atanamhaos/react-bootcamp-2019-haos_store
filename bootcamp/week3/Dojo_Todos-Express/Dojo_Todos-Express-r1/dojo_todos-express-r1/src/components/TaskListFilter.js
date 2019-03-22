import React from 'react';

class TaskListFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <button id='all' onClick={(event) => { this.props.onClickEvent(event) }}>All</button>
        <button id='active' onClick={(event) => { this.props.onClickEvent(event) }}>Active</button>
        <button id='completed' onClick={(event) => { this.props.onClickEvent(event) }}>Completed</button>
      </div>
    )
  }
}

export default TaskListFilter;
