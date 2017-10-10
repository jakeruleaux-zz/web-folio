import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar (props) {
  return (
    <div>
      <h1>sidebar</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      <hr/>
    </div>
  )
}

export default Sidebar;
