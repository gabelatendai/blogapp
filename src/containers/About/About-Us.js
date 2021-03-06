import React from 'react'
import Layout from '../../components/Layout';

/**
* @author
* @function AboutUs
**/

const AboutUs = (styles) => {
  const { showSidebar } = styles;

  const dummyPost = {
    title: `Here's My blog About Page`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  const posts = Array(1).fill(dummyPost);

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <Layout>
            <div key={i} style={{ marginBottom: 40,width:700, }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
          </Layout>
          
        );
      })}
    </div>
  );
};
  
 

export default AboutUs

