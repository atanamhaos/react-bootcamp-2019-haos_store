import React from 'react';
import { connect } from 'react-redux';

import { updateQuery } from './redux';

const AddTab = ({updateQuery}) => {

    return (
      <div className="list">
        <input onChange={(event) => {updateQuery(event.target.value)}}/>
      </div>
    );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    updateAddTabField: (newFieldValue) => dispatch(updateAddTabField(newFieldValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTab);
