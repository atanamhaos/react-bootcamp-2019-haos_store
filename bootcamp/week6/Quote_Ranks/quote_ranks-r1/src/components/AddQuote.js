import React from 'react';
import { connect } from "react-redux";

class AddQuote extends React.Component {

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
        />
      </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
    }

    handleCancel = () => {
        console.log('handleCancel');
    }

    render() {
        const panelstyle = {
            width: '80%',
        };
        //ToDo: ...
        const submitbuttonstyle = {};
        const cancelbuttonstyle = {};

        const addAuthorConfig = [
            { type: 'text', name: 'quote', copi: 'Quote :' },
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

const mapStateToProps = state => {

    return ({});
};

export default connect(mapStateToProps)(AddQuote);
