import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white',
    fontSize: '1.5em'
  };

  return (
    <nav className="NavBar">
      <Link to='/' style={navStyle}>
        <h3>Logo</h3>
      </Link>
        
        <ul className="NavBarUl">
            <Link to='/posts' style={navStyle}>
              <li>Posts</li>
            </Link>
            <Link to='/users' style={navStyle}>
              <li>Users</li>
            </Link>

        </ul>
    </nav>
  );
}

export default Nav;
