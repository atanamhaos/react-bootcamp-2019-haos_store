import React from 'react';
import { connect } from 'react-redux';

import Query from './query';
import List from './list';

const Search = ({ persons }) => {
    return (
      <div className="search">
      <Query/>
      <List/>
      </div>
    );
};

const mapStateToProps = (state) => ({
    persons: state.persons,
});

export default connect(
    mapStateToProps,
)(Search);
