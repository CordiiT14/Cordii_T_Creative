import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import ProjectList from './ProjectList';
import TestimonialList from './TestimonialList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const CordiiTCreative = () => {

    return(
        <div>
            <Navbar />
            <About />
            <ProjectList />
            <TestimonialList />
            <Contact />
            <Footer />
        </div>
    )
}

export default CordiiTCreative;