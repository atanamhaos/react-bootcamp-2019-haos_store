import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Details = ({ persons }) => {

    // The tail of the URL is the ID of the person to show. 
    let idToDetails = window.location.pathname.substring(1);
    // This we need to know.
    let personToDetail;

    // Look through the hole list
    for (let i = 0; i < persons.length; i++) {
        if (parseInt(idToDetails, 10) === parseInt(persons[i].id, 10)) {
            personToDetail = persons[i];
            break; // Since we found it, lets stop looping!
        }
    }

    return (
        <div className="details">
        <h1>           {personToDetail.name}     </h1>
        <h2>City :     {personToDetail.city}     </h2>
        <h2>Industry : {personToDetail.industry} </h2>
        <h2>Hobbies :  {personToDetail.hobbies}  </h2>
        <h2>Email :    {personToDetail.email}    </h2>
        <br></br>
        <h3><Link to={'/'}>bACK</Link></h3>
      </div>
    );
};

const mapStateToProps = (state) => ({
    persons: state.persons,
});

export default connect(
    mapStateToProps,
)(Details);
