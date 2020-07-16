// import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
 import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './containers/Post';
import PageContact from './containers/Contact';
import AboutUs from './containers/About/About-Us';
import React, { useEffect, useState } from 'react';
import MyPost from './containers/AllPost';
import BarChart from './containers/D3';
import Layout from './components/Layout';

const datas = [
  [10, 30, 40, 20,10, 40, 30, 20, 50, 10],
 
]
var i = 0;
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      changeData();
  }, []);

  const changeData = () => {
      setData(datas[i++]);
      if(i === datas.length) i = 0;
  }


 
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
      
        <Route path="/contact-us" component={PageContact}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/somepost" component={MyPost}/>
        <Route path="/d3" render={
          ()=>{
          return (
             <Layout >
              
                <BarChart width={500} height={400} data={data}  />
             </Layout>
        );
       } }/>
        <Route path="/post/:slug" component={Post}/>

        
      </div>
    </Router>
    
  );
}

export default App;
