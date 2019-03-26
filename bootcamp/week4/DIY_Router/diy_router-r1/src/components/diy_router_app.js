import React, { Component } from 'react';
import './../App.css';
import SideNav from './side_nav.js'

class DiyRouter extends Component {
  render() {
    return (
      <div className="SideNavDiv">
      <SideNav/>
      </div>
    );
  }
}

export default DiyRouter;
