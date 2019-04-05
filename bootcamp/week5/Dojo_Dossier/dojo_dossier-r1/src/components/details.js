import React from 'react';
import { connect } from 'react-redux';

import { updateAddDetailField } from "./redux";
import { addDetail } from "./redux";

const Details = ({ persons, selectedTab, addDetailField, updateAddDetailField, addDetail }) => {

    let idToDetails = selectedTab;
    // This is what we need to know.
    let personToDetail;
    // Look threw the hole list
    for (let i = 0; i < persons.length; i++) {
        if (parseInt(idToDetails, 10) === parseInt(persons[i].id, 10)) {
            personToDetail = persons[i];
            break; // Since we found it, lets stop looping!
        }
    }

    function showTab(selectedTab) {
        // If user has selected a tab - STARTS
        if (selectedTab > 0) {
            // Create list
            let list = personToDetail.listdata.map((listitem, index) => {
                return <li key={index}>{listitem}</li>;
            });
            
            // Return panel with list of details and a input field to add new details to the store.
            return (
                <div><br></br>
                  <h1>{personToDetail.name}</h1>
                  <ul>{list}</ul><br></br>
                  <form onSubmit={(event) =>{event.preventDefault();addDetail();}}>
                    <label>Add Detail : &nbsp;  &nbsp;</label>
                    <input  value={addDetailField}
                            onChange={(event) => {updateAddDetailField(event.target.value);}}
                    />
                 </form>
                </div>
            );
        } // If user has selected a tab - ENDS
        else { // If there is no person/tab selected.
            return (<div></div>);
        }
    }
    return (
        <div className="details">
        <br></br>
        {showTab(selectedTab)}
      </div>
    );
};


const mapStateToProps = (state) => ({
    persons: state.persons,
    selectedTab: state.selectedTab,
    addDetailField: state.addDetailField,
});

const mapDispatchToProps = (dispatch) => ({
    updateAddDetailField: (fieldValue) => dispatch(updateAddDetailField(fieldValue)),
    addDetail: (newDetailToAdd) => dispatch(addDetail(newDetailToAdd)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);
