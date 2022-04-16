import React from 'react';
import styled from 'styled-components';
import logo from '../images/CCT_logo1.png';
import headshot from '../images/Headshot.png';


const About = () => {


    return(
        <>
            <div id='about-header'>
                <img  src={logo} alt="Cordii T Creative Logo"></img>
                <h2> Hi, my name is Cordelia. I am a junior full-stack developer, digital illustrator and photographer.</h2>
            </div>
            <section className='about-section'>
                <img id="headshot" src={headshot}></img>
                <section>
                    <p>I have been a freelance photographer since 2012 and a digital illustrator since 2020.</p>
                    <p>My creative side is matched by a proclivity for problem solving and logical thinking. Which has brought me to develop and build my skillset as a software developer.</p>
                    <p>Since February 2022 I have been attending the CodeClan Professional Software Development course.</p>
                    <div id="social-media">
                        <a href="https://www.linkedin.com/in/cordelia-toennies-johnstone-2a1148102" target="_blank">LinkedIn</a>
                        <a href="https://github.com/CordiiT14" target="_blank">Github</a>
                        <a href="https://www.instagram.com/cordii.t_creative/" target="_blank">Instagram</a>
                    </div>
                </section>

            </section>
        </>
    )
};

export default About;