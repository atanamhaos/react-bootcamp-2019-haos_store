import React from 'react';

import Nav from './nav';

const headerStyle = {
  color: 'black',
  padding: '0px 15px 0px 15px',
  fontSize: "18px",
};

function Header(props) {
  return (
    <div style={headerStyle}>
      <h1>PPM - Project Product Manager</h1>
      <Nav/>
    </div>
  );
}

export default Header;
