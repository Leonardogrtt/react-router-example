import React, { useState, useEffect } from 'react';
import './Posts.css';
import person from '../person.png'

function Posts() {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      const data = await fetch('https://my-server-deploy.herokuapp.com/api/posts');
  
      const posts = await data.json();
  
      //console.log(items);
  
      setPosts(posts);
    }

    fetchPosts();

  }, []);


  return (
    <>
    <div>
      <ul className="PostsListUl">
        {posts.map((post, index) => (
            <li key={post.id} className="PostLi">

                <div className="PostUserPhoto">
                    <img src={person} className="UserPhoto" alt="profile"></img>
                </div>
                <div className="PostContent">
                      <div className="PostUserInfoDiv">
                        
                          <div className="TopLeftInfo">
                            <div className="PostUserInfo">Nome</div>
                            <div className="PostUserInfo">Empresa</div>
                          </div>
                          <div className="TopRightInfo">
                            <div className="PostUserInfo">Data/Hora</div> 
                          </div>

                          
                          
                        
                      </div>
                    
                      <div className="PostInfo">
                          <div className="PostTitle">{post.title}</div>
                          <div className="PostBody">{post.body}</div>
                      </div>

                </div>
            
            </li>
        ))}
      </ul>

    </div>
    </>
  );
}

export default Posts;
