import React from 'react';
import { connect } from 'react-redux';

import { createTask } from './redux';
import { updateNewTask } from './redux';

const TaskAdd = (props) => {

    return (
        <div id='taskadd'>
         <form onSubmit={ (event) => { event.preventDefault();props.createTask(); }}><input onChange={(event) => {props.updateNewTask(event.target.value);}} value={props.newTaskValue}></input></form>
      </div>
    );
};

const mapStateToProps = (state) => ({
    newTaskValue: state.newTaskValue,
});

const mapDispatchToProps = (dispatch) => ({
    createTask: () => dispatch(createTask()),
    updateNewTask: (newFieldValue) => dispatch(updateNewTask(newFieldValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskAdd);
