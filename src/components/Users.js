import React, { useState, useEffect } from 'react';
import './Users.css';
import { Link } from 'react-router-dom'

function Users() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const data = await fetch('http://jsonplaceholder.typicode.com/users');
  
      const users = await data.json();
  
      //console.log(items);
  
      setUsers(users);
    }

    fetchUsers();

  }, []);


  return (
    <>
    <div>
      <h1>Users Page:</h1>

      <ul className="UsersListUl">
        {users.map(user => (
          <li key={user.id}>
            
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>

          </li>
        ))}
      </ul>

    </div>
    </>
  );
}

export default Users;
