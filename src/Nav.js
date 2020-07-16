import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {


  return (
    <nav className="NavBar">
      <Link className="NavLink" to='/' >
        <h3>Logo</h3>
      </Link>
        
        <ul className="NavBarUl">
            <Link className="NavLink" to='/posts' >
              <li>Posts</li>
            </Link>
            <Link className="NavLink" to='/users' >
              <li>Users</li>
            </Link>

        </ul>
    </nav>
  );
}

export default Nav;
