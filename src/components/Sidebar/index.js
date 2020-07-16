import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import Default from '../../blogPostImages/default.png'

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import facebook from  '../../blogPostImages/f.png'
import twitter from  '../../blogPostImages/t.png'
import instagram from  '../../blogPostImages/i.png'
import youtube from  '../../blogPostImages/y.png'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={Default} alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Gabriel I am a fullstack software developer specialization in 
                    Front end  and backend developement</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                                    </div>
                                    <div  style={{ marginTop: '10px',marginLeft: '40px',padding: '10px', boxSizing: 'border-box' }}>
                                        
                    <img src={facebook} alt="Facebook" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                    <img src={twitter} alt="twitter" width="20px" height="20px" style={{ marginLeft: '20px' }} />
                    <img src={instagram} alt="instagram" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                    <img src={youtube} alt="youtube" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                    </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar