import React from 'react';
import './style.css';
import facebook from  '../../blogPostImages/f.png'
import twitter from  '../../blogPostImages/t.png'
import instagram from  '../../blogPostImages/i.png'
import youtube from  '../../blogPostImages/y.png'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
      
        <div>
                                        
                                        <img src={facebook} alt="Facebook" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                                        <img src={twitter} alt="twitter" width="20px" height="20px" style={{ marginLeft: '20px' }} />
                                        <img src={instagram} alt="instagram" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                                        <img src={youtube} alt="youtube" width="20px" height="20px" style={{ marginLeft: '20px' }}/>
                                        </div>
    
    </header>
   )

 }

export default Header