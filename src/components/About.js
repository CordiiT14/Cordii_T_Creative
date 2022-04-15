import React from 'react';
import styled from 'styled-components';
import logo from '../images/CCT_logo1.png';
import headshot from '../images/Headshot.jpg';


const About = () => {


    const Header = styled.div`
        color: white;
        text-align: center;
    `

    const About = styled.div`
        background: #b2baa7;
        color: white;
        display: flex;
        padding: 2em;
    `

    return(
        <>
            <Header>
                <img src={logo} alt="Cordii T Creative Logo" width="45%"></img>
                <p> Hi, my name is Cordelia. I am a junior full-stack developer, digital illustrator and photographer.</p>
            </Header>
            <About>
                <img src={headshot} width="20%"></img>
                <section>
                <p>I have been a freelance photographer for 10 years and a digital illustrator since 2020.</p>
                <p>My creative side is matched by a proclivity for problem solving and logical thinking. This has brought me to develop my newest skillset as a software developer.</p>
                </section>
            </About>
        </>
    )
};

export default About;