import React from 'react';
import { connect } from 'react-redux';

const List = ({ persons, queryString }) => {

    // let idToDetails = window.location.pathname.substring(1);
    // let personToDetail;
    // for (let i = 0; i < persons.length; i++) {
    //     if (parseInt(idToDetails, 10) === parseInt(persons[i].id, 10)) {
    //         personToDetail = persons[i];
    //     }
    // }
    //console.log('List Component, queryString : ',queryString);
    //console.log('List Component, persons : ',persons);
    
    const queryHits = persons.map((person,index)=>{
        console.log(queryString);
        console.log(person.name);
    });
    
    return (
      <div className="list">
      <ul>The List</ul>
      </div>
    );
};

const mapStateToProps = (state) => ({
    persons: state.persons,
    queryString: state.queryString,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
