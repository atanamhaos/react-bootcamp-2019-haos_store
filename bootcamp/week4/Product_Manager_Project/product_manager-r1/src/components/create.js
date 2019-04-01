import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* A simple way to keep field values in sink with component state. */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    /* Pass the callback a copy of this components state. */
    this.props.callback({...this.state});
    
    /* These lines reset the form */
    let clearedObject = Object.assign(this.state);
    for (var key in clearedObject) {
      if (clearedObject.hasOwnProperty(key)) {
        clearedObject[key] = '';
      }
    }
    this.setState(clearedObject);
  }

  createLineOfForm(configObject, key) {

    const labelstyle = {
      color: 'black',
      padding: '0px 0px 0px 50px',
      fontSize: "1.5em",
    };

    const fieldstyle = {
      fontSize: "1em",
      border: '3px grey aolid',
      width: '50%',
      float: 'right',
    };

    return (
      <div key={key}><label style={labelstyle}>{configObject.copi}</label><input style={fieldstyle} type={configObject.type} onChange={this.handleChange} name={configObject.name} value={this.state[configObject.name]} /></div>
    );
  }

  render() {

    const panelstyle = {
      width: '30%',
    };

    return (
      <div className="createpanel" style={panelstyle}>
            <form onSubmit={this.handleSubmit}>
               {this.props.formConfig.map((line, index)=>{return this.createLineOfForm(line, index)} )}
            <input type="submit" disabled={this.props.formIsInvalid(this.state)}/>
            </form>
          </div>
    );
  }
}

export default Create;
