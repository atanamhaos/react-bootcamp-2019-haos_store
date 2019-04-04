import React from 'react';
import { connect } from 'react-redux';
//import PSA from './components/people_search_app';

const Search = ({ persons }) => {
    return (
      <div className="search">
      <p>search</p>
      </div>
    );
};

const mapStateToProps = (state) => ({
    persons: state.persons,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

//export default Search;