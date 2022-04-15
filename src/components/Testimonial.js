import React from 'react';
import styled from 'styled-components';

const Testimonial = () => {

    const Testemonial = styled.div`
        background: #436053;
        max-width: 500px;
    `

    return(
        <Testemonial>
            <p>
                "Cordii is fast, efficient and has an excellent eye for image and design. We've always found her easy to work with and couldn't recommend her enough. 
                For everything from show photography to print design she delivers in a very rapid turnaround and works really closely with us to get the perfect results." 
            </p>
            <h3>Laila Noble (Artistic Director & Co-Founder of ClartyBurd Theatre)</h3>
        </Testemonial>
    )
};

export default Testimonial;