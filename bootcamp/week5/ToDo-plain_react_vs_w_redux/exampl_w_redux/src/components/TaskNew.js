import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createTask, updatetaskinput } from './../redux';


const TaskNew = (props) => {
    return (
      <div>
        <br></br>
       New Task : 
       <form onSubmit={(event)=>{
         event.preventDefault();
         //console.log('hi ben');
         props.createTask();  
       }}>
       
       <input onChange={(event)=>{
         props.updatetaskinput(event.target.value);    
       }} value={props.newtask}/>
    </form>
   </div>
    );
};

//export default TaskNew;

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    newtask: state.newtask,
})

const mapDispatchToProps = (dispatch) => ({
    updatetaskinput:(val) => dispatch(updatetaskinput(val)),
    createTask: () => dispatch(createTask())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskNew);

