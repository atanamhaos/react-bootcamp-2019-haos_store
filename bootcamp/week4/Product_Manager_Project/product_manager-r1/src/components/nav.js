import React from 'react';
import {  Link } from "react-router-dom";

const navdivstyle = {
  color: 'black',
  padding: '0px 15px 0px 15px',
  fontSize: "1.5em",
};

const navliststyle = {
  listStyleType: 'none',
  margin: 0,
  overflow: 'hidden',
};

const  navlinkStyle = {
  float: 'left',
  padding: '16px 30px 16px 0',
  color: 'blue',
};

function Nav(props) {
  return (
    <div style={navdivstyle}>
      <ul style={navliststyle}>
        <Link style={navlinkStyle} to="/home">Home</Link>
        <Link style={navlinkStyle} to="/products">Product List</Link>
        <Link style={navlinkStyle} to="/products/new">Create Product</Link>
      </ul>
    </div>
  );
}

export default Nav;
