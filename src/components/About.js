import React from 'react';
import styled from 'styled-components';
import logo from '../images/CCT_logo1.png';
import headshot from '../images/Headshot.jpg';


const About = () => {


    return(
        <>
            <div className='about-header'>
                <img  src={logo} alt="Cordii T Creative Logo"></img>
                <h2> Hi, my name is Cordelia. I am a junior full-stack developer, digital illustrator and photographer.</h2>
            </div>
            <section className='about-section'>
                <img id="headshot" src={headshot}></img>
                <section>
                <p>I have been a freelance photographer for 10 years and a digital illustrator since 2020.</p>
                <p>My creative side is matched by a proclivity for problem solving and logical thinking. This has brought me to develop my newest skillset as a software developer.</p>
                </section>
            </section>
        </>
    )
};

export default About;