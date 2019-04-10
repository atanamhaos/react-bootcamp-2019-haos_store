import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <h1 className="apptitle">Welcome to React w. Redux</h1>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    ...state
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    simpleAction: () => dispatch(simpleAction())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
