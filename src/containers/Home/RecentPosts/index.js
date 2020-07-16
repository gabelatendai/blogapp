import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import One from '../../../blogPostImages/1.jpg';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted on June 21, 2020 bySora Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={One} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Life Style</span>
                <h2>Where does it come from?</h2>
                <span>posted on July 09, 2020 by Gabriel Blogging Tips</span>
                <p>
Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
	</p>

                <button>Read More</button>     

            </div>

        </Card>
   
    </div>
   )

 }

export default RecentPosts