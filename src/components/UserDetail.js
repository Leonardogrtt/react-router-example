import React, { useState,useEffect } from 'react';

function UserDetail({ match }) {

  const [ user, setUser ] = useState({
    user: {
      name: String,
      id: Number,
      companyName: String
    }
  });


  useEffect(() => {

    const fetchUser = async () => {
        
      const data = await fetch(`https://my-server-deploy.herokuapp.com/api/users/${match.params.id}`);

      const user = await data.json();

      setUser({ 
        name:user.name, 
        id:user.id,
        companyName: user.company.name
      });

    }

    fetchUser();
  }, [match]);
  

  return (
    <>
    <div style={{"width":"50vw", "display":"flex", "flex-direction":"column" }}>
      <h1>User Info:</h1>
          {user.id}<br />
          {user.name}<br />
          {user.companyName}<br />
          <div>
            <button>Show/Hide posts</button>
          </div>
    </div>
    </>
  );
}

export default UserDetail;