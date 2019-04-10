import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Field from './Field';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="apptitle">Welcome to React w. Redux</h1>
        <Button />
        <Field />
      </div>
    );
  }
}

const mapStateToProps = state => { return ({}); };

const mapDispatchToProps = dispatch => { return ({}); };

export default connect(mapStateToProps, mapDispatchToProps)(App);
