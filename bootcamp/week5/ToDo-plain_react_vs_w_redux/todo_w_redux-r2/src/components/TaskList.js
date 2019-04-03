import React from 'react';
import { connect } from 'react-redux';

import { toggleTask } from './redux';
import { deleteTask } from './redux';

const TaskList = (props) => {
    
    const taskstyle = (isCompleted) => {
        return ({ textDecoration: (isCompleted ? 'line-through' : 'none') });
    };
    
    const tasklist = props.tasks.map((task, index) => {
        return (
            <div key={index}>
     <h5 test='one' style={taskstyle(task.completed)} onClick={ () => { props.toggleTask(task.id); }}>{task.title}
        &nbsp; &nbsp; <button onClick={ () => { props.deleteTask(task.id); }}>Delete</button></h5>
      </div>
        );
    });

    return (
        <div id='tasklist'>
         {tasklist}
      </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    toggleTask: (idx) => dispatch(toggleTask(idx)),
    deleteTask: (idx) => dispatch(deleteTask(idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);
