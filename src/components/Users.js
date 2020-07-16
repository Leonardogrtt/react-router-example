import React, { useState, useEffect } from 'react';
import './Users.css';
import person from '../person.png'
import { Link } from 'react-router-dom'

function Users() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const data = await fetch('https://my-server-deploy.herokuapp.com/api/users');
  
      const users = await data.json();
  
      //console.log(items);
  
      setUsers(users);
    }

    fetchUsers();

  }, []);


  return (
    <>
    <div className="UsersListDiv">

      <ul className="UsersListUl">
        {users.map((user, index) => (
            <li key={user.id} className="UserLi">

              <div className="UserInfoContainer"> 

                    <div className="UserPhotoDiv">
                        <img src={person} className="UserPhoto" alt="profile"></img>
                    </div>
              
                    <div className="UserInfoDiv">
                      
        <div className="UserInfo"><small>Nome: </small><Link className="UserLink" to={`/users/${user.id}`}>{user.name}</Link></div>
        <div className="UserInfo"><small>Empresa: </small>{user.company.name}</div>
        <div className="UserInfo"><small>Email: </small>{user.email}</div>
                      
                    </div>

              </div>

            </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Users;
