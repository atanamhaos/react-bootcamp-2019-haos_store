import React from 'react';
import { connect } from "react-redux";

import { fetchData } from "./../actions/fetchActions";

class Create extends React.Component {

  componentDidMount() {
    //console.log('componentDidMount');
    // ToDo : Reduce the amount of fetching going on.
    this.props.dispatch(fetchData());
  }

  /* A simple way to keep field values in sink with component state. */
  handleChange = (event) => {
    //console.log('event.target.name : ',event.target.name);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log('handleSubmit!');
    // /* Pass the callback a copy of this components state. */
    // this.props.callback({...this.state});

    // /* These lines reset the form */
    // let clearedObject = Object.assign(this.state);
    // for (var key in clearedObject) {
    //   if (clearedObject.hasOwnProperty(key)) {
    //     clearedObject[key] = '';
    //   }
    // }
    // this.setState(clearedObject);
  }

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

  render() {
    const panelstyle = {
      width: '80%',
    };
    //ToDo: ...
    const submitbuttonstyle = {};

    const { loading, config, error } = this.props;
    //console.log('render() STARTS',);

    if (loading === true) {
      return (<div>Loading...</div>);
    }

    if (error === true) {
      return (<div>Error! {error.message}</div>);
    }

    return (
      <div className="createpanel" style={panelstyle}>
            <form onSubmit={this.handleSubmit}>{config.map((line, index)=>{return this.createLineOfForm(line, index)} )}
              <input type="submit" disabled={false} style={submitbuttonstyle}/>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => {

  return ({
    config: state.data.data.dataconfig,
    loading: state.data.loading,
    error: state.data.error
  });
};

export default connect(mapStateToProps)(Create);
