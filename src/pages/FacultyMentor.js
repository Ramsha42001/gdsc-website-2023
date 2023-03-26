import React from 'react'
import upperSection from '../images/upperSection.png';
import lowerSection from  '../images/belowSection.png';
import FacultyCss from './FacultyMentor.module.css'

function FacultyMentor() {
    return ( 
        <>
        <section id='faculty' className={FacultyCss.mainDiv}>
        <div className={FacultyCss.upperSection}>
            <img className={FacultyCss.upperImage} src={upperSection} alt='upper-section' />
        </div>


        <div className={FacultyCss.midSection}>
            <h1 className={FacultyCss.heading}>Faculty Mentor</h1>
            <div className={FacultyCss.main}>
            <div className={FacultyCss.imageArea}>
            <div className={FacultyCss.imageBigDiv}>
            <div className={FacultyCss.imageDiv}></div></div>
            </div>
            <div className={FacultyCss.paragraph}>
                <div>Mentor name</div>
                <div>Mentor designation</div>
            </div>
            <div className={FacultyCss.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</div>

            </div>



            </div>
        <div className={FacultyCss.lowerSection}>
            <img  className={FacultyCss.lowerImage} src={lowerSection} alt='lower-section' />
        </div>
        </section>
       
        </>
     );
}

export default FacultyMentor;