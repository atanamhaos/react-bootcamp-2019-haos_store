import React from 'react';
import { connect } from 'react-redux';

const Details = ({ persons }) => {

    let idToDetails = window.location.pathname.substring(1);
    let personToDetail;
    for (let i = 0; i < persons.length; i++) {
        if (parseInt(idToDetails, 10) === parseInt(persons[i].id, 10)) {
            personToDetail = persons[i];
        }
    }

    return (
      <div className="details">
        <h1>{personToDetail.name}</h1>
        <h2>City : {personToDetail.city}</h2>
        <h2>Industry : {personToDetail.industry}</h2>
        <h2>Hobbies : {personToDetail.hobbies}</h2>
        <h2>Email : {personToDetail.email}</h2>
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
)(Details);
