import React, { Component } from 'react';
import { connect } from 'react-redux';

import { buttonAction } from './../actions/buttonAction';

class Button extends Component {

  buttonAction = (event) => {
    this.props.buttonAction();
  };

  render() {
    return (
      <div className="button">
        <button onClick={this.buttonAction}>Test redux action</button>
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
    buttonAction: () => dispatch(buttonAction())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
