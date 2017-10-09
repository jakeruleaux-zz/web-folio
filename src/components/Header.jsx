import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      Header
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header;
