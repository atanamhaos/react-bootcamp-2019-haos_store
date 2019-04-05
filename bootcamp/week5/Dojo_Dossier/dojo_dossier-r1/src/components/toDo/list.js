import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const List = ({ persons, queryString }) => {

    const queryHits = persons.map((person, index) => {
        // If we have a match of name and query or the query string is empty
        if (person.name.toUpperCase().includes(queryString.toUpperCase()) || queryString === '') {
            // Create and return a link routing to the details using the ID.
            return <li key={person.id}><Link to={'/' + person.id}>{person.name}</Link></li>;
        } else {
            return null; // This eliminates a warning.
        }
    });

    return (
        <div className="list">
        <ul>
          {queryHits}
        </ul>
      </div>
    );
};

const mapStateToProps = (state) => ({
    persons: state.persons,
    queryString: state.queryString,
});

export default connect(
    mapStateToProps,
)(List);
