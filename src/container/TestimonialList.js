import React from 'react';
import styled from 'styled-components';


const TestimonialList = () => {

    const Testemonials = styled.div`
        display: flex;
        justify-content: center;
        color: white;
        background: #b2baa7;
        text-align: center;
        padding: 20px;

    `

    return(
        <Testemonials>
                <p>
                "Cordii is fast, efficient and has an excellent eye for image and design. We've always found her easy to work with and couldn't recommend her enough. 
                For everything from show photography to print design she delivers in a very rapid turnaround and works really closely with us to get the perfect results." 
                <br></br>- Laila Noble (Artistic Director & Co-Founder of ClartyBurd Theatre)
                </p>
        </Testemonials>
    )


};

export default TestimonialList;