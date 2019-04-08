import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { addTab } from "./redux";
import { updateAddTabField } from "./redux";
import { selectTab } from "./redux";

const Tabs = ({ persons, addTab, newtabfield, updateAddTabField, selectTab }) => {
    // The Tabs Style
    const tabStyle = (numtabs) => {
        return {
            float: 'left',
            border: '3px 3px 3px 30px',
            borderStyle: 'solid solid solid solid',
            borderWidth: '10px 1px 1px 1px',
            borderColor: '#004c44 #093c8e #1759c4 #1759c4',

            borderRadius: '15px 50px 0px 0px',

            margin: '0px 2px 0px 0px',
            padding: '5px 20px 0px 5px',
            textDecoration: 'none',

            fontSize: '1.5em',
        };
    };
    // The Tabs
    const tabs = persons.map((person, index, array) => {
        return <Link 
              to={'/' + person.id} 
              style={tabStyle(array.length)} 
              key={person.id} 
              onClick={(event) => { 
                //console.log(selectTab);
                event.preventDefault();
                selectTab(person);}
                  
              }
            >{person.name}</Link>;
    });

    // Add Tab Tab
    const addtabtab = () => {
        return (<div><Link to={'/'} id='addtabtab' style={addtabtabstyle()} onClick={() => activatemodal()}>&nbsp;&nbsp;&nbsp;+</Link></div>);
    };
    // Add Tab Tab Style
    const addtabtabstyle = () => {
        return {
            float: 'right',
            border: '3px 3px 3px 30px',
            borderStyle: 'solid solid solid solid',
            borderWidth: '10px 1px 1px 1px',
            borderColor: '#004c44 #093c8e #1759c4 #1759c4',
            fontWeight: 'bold',
            borderRadius: '50px 15px 0px 0px',

            margin: '0px 2px 0px 0px',
            padding: '5px 20px 0px 0px',
            textDecoration: 'none',

            fontSize: '1.5em',
        };
    };
    /* The Modal (background) */
    const modalstyle = {
        display: 'none', // Hidden by default 
        position: 'fixed', // Stay in place 
        zIndex: '1', // Sit on top 
        //paddingTop: '100px', // Location of the box 
        left: 0,
        top: 0,
        width: '100%', // Full width
        //height: '100%', // Full height 
        overflow: 'auto', // Enable scroll if needed 
        backgroundColor: 'rgb(0,0,0)', // Fallback color
        // eslint-disable-next-line
        backgroundColor: 'rgba(0,0,0,0.7)', // Black w/ opacity
    };
    /* Modal Content Style*/
    const modalcontentstyle = {
        backgroundcolor: '#fefefe',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%',
    };
    /* Modal Close Style*/
    const closestyle = {
        color: '#aaaaaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
    };
    
    const modelinputstyle = {
        width: '90%',
        fontSize:'larger',
        //height: '50%', // Full height 
    }
    // This bit makes the model work, if you want to call it that...
    function activatemodal() {
        // This, and the model element below were grabbed from some forgotten tutorial and made/hacked to work...
        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("addtabtab");
        // Get the <span> element that closes the modal
        var span = document.getElementById("modelclose");
        modal.style.display = "block";
        // When the user clicks the button, open the modal 
        btn.onclick = function() { modal.style.display = "block"; };
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { modal.style.display = "none"; };
        // When the user clicks anywhere outside of the modal, close it
        // ToDo: Turn this into a ternary
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }


    return (
        <div className="navtabs">
          {tabs}
          {/*<!-- The Modal -->*/}
          <div id="myModal" style={modalstyle}>
            {/*<!-- Modal content -->*/}
            <div style={modalcontentstyle}>
              <span id="modelclose" style={closestyle}>&times;</span>
              <p>New Tab:</p>
              <form onSubmit={(event) =>{
                  event.preventDefault();
                  addTab();
                  //var span = document.getElementById("modelclose");
                  var modal = document.getElementById('myModal');
                  modal.style.display = "none";
                  }}><h1 style={{color:'white'}}>NEW TAB NAME</h1>
                <input style={modelinputstyle} value={newtabfield} onChange={(event) => {updateAddTabField(event.target.value)}}/>
              </form>
            </div>
          </div>
          {addtabtab()}
        </div>
    );
};



const mapStateToProps = (state) => ({
    persons: state.persons,
    newtabfield: state.addTabField,
    selectedTab: state.selectedTab,
});

const mapDispatchToProps = (dispatch) => ({
    updateAddTabField: (fieldValue) => dispatch(updateAddTabField(fieldValue)),
    addTab: (newTabToAdd) => dispatch(addTab(newTabToAdd)),
    selectTab: (event) => dispatch(selectTab(event)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tabs);
