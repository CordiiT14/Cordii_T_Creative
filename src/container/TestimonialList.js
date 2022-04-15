import React from 'react';
import styled from 'styled-components';
import Testemonial from '../components/Testimonial';


const TestimonialList = () => {

    const Testemonials = styled.div`
        display: flex;
        justify-content: center;
        color: white;
        background: #b2baa7;
        text-align: center;
        padding: 20px;
        min-height: 300px;

    `

    return(
        <Testemonials>
                <Testemonial/>
        </Testemonials>
    )


};

export default TestimonialList;