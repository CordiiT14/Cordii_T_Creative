import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import ProjectList from './ProjectList';
import TestimonialList from './TestimonialList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import burgermenu from '../images/burgerclosed.png'
import closemenu from '../images/closemenu.png'

const CordiiTCreative = () => {
    const [isOpen, setIsOpen] = useState('false');



    return(
        <div>
            <section id='navbar'>
                {isOpen ? 
                <img id="burgerIcon" src={burgermenu} onClick={() => {setIsOpen(!isOpen)}}></img> : 
                <div>
                    <img id="closeMenu" src={closemenu} onClick={() => {setIsOpen(!isOpen)}}></img>
                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div> }
            </section>
            <About />
            <ProjectList />
            <TestimonialList />
            <Contact/>
            <Footer />
        </div>
    )
}

export default CordiiTCreative;