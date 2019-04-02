import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = (props) => {
  return (
    <div id="navheader">
      <ul id="linkstyle">
        <li className="listyle"><Link to="/todos/home">Home</Link></li>
        <li className="listyle"><Link to="/todos/all">All</Link></li>
        <li className="listyle"><Link to="/todos/create">Create</Link></li>
      </ul>
    </div >
  );

}
export default Navigation;