import React from 'react';
import { connect } from "react-redux";

import { addAuthorAction } from "./../actions/addAuthorAction";

class AddAuthor extends React.Component {

    createLineOfForm = (configObject, key) => {

        const labelstyle = {
            color: 'black',
            padding: '0px 0px 0px 50px',
            fontSize: "1.5em",
            width: '10%',
            display: 'inline-block',
        };

        const fieldstyle = {
            fontSize: "1em",
            border: '3px grey aolid',
            width: '40%',
            display: 'inline-block',
        };

        return (
            <div key={key}>
        <label style={labelstyle}>{configObject.copi}</label>
        <input 
          style={fieldstyle}
          type={configObject.type}
          onChange={this.handleChange}
          name={configObject.name}
          //ToDo : value={}
        />
      </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        addAuthorAction('test');
        //console.log(event.target[2].value);
    }

    handleCancel = () => {
        console.log('handleCancel');
        //console.log(event.target[2].value);
    }

    render() {
        const panelstyle = {
            width: '80%',
        };
        //ToDo: ...
        const submitbuttonstyle = {};
        const cancelbuttonstyle = {};

        const addAuthorConfig = [
            { type: 'text', name: 'name', copi: 'Name :' },
        ];

        return (
            <div className="createpanel" style={panelstyle}>
            <form onSubmit={this.handleSubmit}>{addAuthorConfig.map((line, index)=>{return this.createLineOfForm(line, index)} )}
              <input type="button" disabled={false} value="Cancel" style={cancelbuttonstyle} onClick={this.handleCancel}/>
              <input type="submit" disabled={false} value="Submit" style={submitbuttonstyle}/>
            </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => { return ({}); };

const mapDispatchToProps = (dispatch) => {
    return ({
    addAuthorAction:(newAuthor) => dispatch(addAuthorAction(newAuthor)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAuthor);
