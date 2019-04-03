import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTask } from './../redux';

const TaskNew = (props) => {
    return (
        <div>
        <p>New Task</p>    
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    createTask: () => dispatch(createTask())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskNew);

