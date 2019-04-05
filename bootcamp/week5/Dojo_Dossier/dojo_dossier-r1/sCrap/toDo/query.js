import React from 'react';
import { connect } from 'react-redux';

import { updateQuery } from './redux';

const Query = ({updateQuery}) => {

    return (
      <div className="list">
        <input onChange={(event) => {updateQuery(event.target.value)}}/>
      </div>
    );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    updateQuery: (newFieldValue) => dispatch(updateQuery(newFieldValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Query);
