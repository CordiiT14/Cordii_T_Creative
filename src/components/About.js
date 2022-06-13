import React from 'react';
// import logo from '../images/CCT_logo1.png';
import logo from '../images/cordiit-ducky-logo.png';
import headshot from '../images/Headshot.png';


const About = () => {


    return(
        <>
            <div id='about-header'>
                <img  src={logo} alt="Cordii T Creative Logo"></img>
                <h2> Hi, my name is Cordelia. I am a junior full-stack developer and digital illustrator.</h2>
            </div>
            <div id="background-image"></div>
            <section className='about-section'>
                <img id="headshot" src={headshot} alt="Cordelia"></img>
                <section>
                    <p>I moved from Germany to Edinburgh in 2011 for my undergraduate in Drama and Performance. Over the last ten years I have worked in hospitality, retail management and the performaning arts.</p>
                    <p>At the start of 2022 I made the decision to retrain as a Software Developer with CodeClan's 16-week intensive course.</p>
                    <p>Scroll down to see some of my work from the past 4 months or checkout my GitHub.</p>
                    <div id="social-media">
                        <a href="https://www.linkedin.com/in/cordelia-toennies-johnstone-2a1148102" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/CordiiT14" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.instagram.com/cordii.t_creative/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </section>

            </section>
        </>
    )
};

export default About;