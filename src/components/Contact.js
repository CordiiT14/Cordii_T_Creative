import React from 'react';
import styled from 'styled-components';

const Contact = () => {

    const ContactContainer = styled.div`
        min-height: 200px;
        color: white;
        text-align:center;

    `

    return(
        <ContactContainer>
            <h3>Get in touch:</h3>
            <p>Email: cordiit_creative@gmail.com </p>
            <a href="">LinkedIn</a>
        </ContactContainer>
    )


};

export default Contact;