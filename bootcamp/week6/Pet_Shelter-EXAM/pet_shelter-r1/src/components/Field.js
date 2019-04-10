import React from 'react';
import { connect } from 'react-redux';

import { fieldUpdate, fieldStore } from './../actions/fieldActions';

const Field = (props) => {
  return (
    <div className="field">
      <form onSubmit={(event)=>{
        event.preventDefault();
        props.fieldStore();  
      }}>
     
      <input type='text'
        onChange={(event)=>{props.fieldUpdate(event.target.value);}}
        value={props.fieldval}
      />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    fieldval: state.field.fieldval,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fieldUpdate: (fieldval) => dispatch(fieldUpdate(fieldval)),
    fieldStore: () => dispatch(fieldStore()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
