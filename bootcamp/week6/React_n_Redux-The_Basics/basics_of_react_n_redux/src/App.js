// file : `src/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';

class App extends Component {

  simpleAction = (event) => {
    console.log('simpleAction = (event) => {...}, event : ', event);
    this.props.simpleAction();
  };

  render() {
    console.log('render() {...}, : ',);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps = state => {...}, state : ', state);
  return ({
    ...state
  });
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps = dispatch => {...}, dispatch : ', dispatch);
  return ({
    simpleAction: () => dispatch(simpleAction())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
