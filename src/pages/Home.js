import React from 'react'
import HomeCss from './Home.module.css'
import homeImage from '../images/homeImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return ( 
        <>
        <section id='Home' className={HomeCss.homeDiv}>
        <div className={HomeCss.headingDiv}>
          <h1 className={HomeCss.heading1}>Google</h1>
          <h1 className={HomeCss.heading2}>Developer Student Clubs</h1>
          <h1 className={HomeCss.heading3}>The LNM Institute Of Information Technology</h1>
          <div>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faTwitter} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faFacebookF} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faInstagram} /></button>
          <button className={HomeCss.brandButtons}><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></button>
          </div>
          
        </div>
        <div >
            <img className={HomeCss.homeImage} src={homeImage} alt='homeImage.png' />
        </div>
        </section>
       
        </>
     );
}

export default Home;
