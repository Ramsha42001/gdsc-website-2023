import React from 'react'
import NavCss from './Navbar.module.css'
import gdsclogo from '../images/gdsclogo.png';
import gdscname from '../images/gdscname.png';




function Navbar() {
    return (  
        <>
        <div className={NavCss.navMainDiv}>
         <div className={NavCss.logoimagediv}>
            <img src={gdsclogo} alt='gdsclogo'/>
            <img src={gdscname} alt='gdscname' /> 
         </div>
        <ul className={NavCss.navbardiv}>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Our Team</li>
        </ul>

        <button type='submit' className={NavCss.button}>Join the community</button>
        
        </div>
        </>
    );
}

export default Navbar;