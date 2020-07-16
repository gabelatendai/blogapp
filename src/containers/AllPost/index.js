import React from 'react'
import BlogPost from '../../components/BlogPost'
import RecentPosts from '../Home/RecentPosts'
import Sidebar from '../../components/Sidebar'
import Layout from '../../components/Layout'

/**
* @author
* @function MyPost
**/

const MyPost = (props) => {


    //console.log(props);
    
    
      return(

<div style={{width: '100%'}} > 
<Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>

</div>
   
       )
    
     }

export default MyPost