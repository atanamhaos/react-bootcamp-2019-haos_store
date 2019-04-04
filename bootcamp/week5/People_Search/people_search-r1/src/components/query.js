import React from 'react';
import { connect } from 'react-redux';

import { updateQuery } from './redux';

const Query = ({query, updateQuery}) => {

    return (
      <div className="list">
      <ul>The Query</ul>
        <form onSubmit={(event) => { 
                     event.preventDefault();
            console.log('submit query!');
        }}>
        <input onChange={(event) => {
              console.log('change event on query!');
              updateQuery(event.target.value);
        }
        }
            /*value={query}*/
        >
        </input>
      </form>
      </div>
    );
};


/*
        <form onSubmit={(event) => { 
                     event.preventDefault();props.createTask();
                    }}>
        <input onChange={(event) => {
                     props.updateNewTask(event.target.value);}} 
               value={props.newTaskValue}>
        </input>
      </form>
*/


const mapStateToProps = (state) => ({
    query: state.query,
});

const mapDispatchToProps = (dispatch) => ({
    updateQuery: (newFieldValue) => dispatch(updateQuery(newFieldValue)),
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query);
