import React from "react";
import {  Link } from "react-router-dom";

const headerStyle = {
  color: 'black',
  padding: '0px 15px 0px 15px',
  fontSize: "18px",
};

const linkStyle = {
  float: 'right',
  padding: '16px 30px 16px 0',
  textDecoration: 'none',
};

const navBarStyle = {
  listStyleType: 'none',
  margin: 0,
  overflow: 'hidden',
};

const logoStyle = {
  float: 'left',
  width: '10%',
  height: 'auto',
};


function Header(props) {
  return (
      <div style={headerStyle}>
        <img style={logoStyle} src="./img/applogo.png" alt="logo"/>
          <div>   
            <ul style={navBarStyle}>
              {/* Nav items are reverse of their display order, css...*/}
              <li><Link style={linkStyle} to="/ledger">Browse Ledger</Link></li>
              <li><Link style={linkStyle} to="/sell">Sell Coins</Link></li>
              <li><Link style={linkStyle} to="/mine">Mine Coins</Link></li>
              <li><Link style={linkStyle} to="/buy">Buy Coins</Link></li>
              <li><Link style={linkStyle} to="/home">Home</Link></li>
            </ul>
            <hr />
          </div>
      </div>
  );
}

export default Header;
