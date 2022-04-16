import React from 'react';
import {Link} from 'react-scroll';



const Navbar = () => {



    return(
        <section id='navbar'>
            <div className="navigation">
                <li>
                    <Link activeClass="active" to="about-section" spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="project-container" spy={true} smooth={true}>
                    Projects
                    </Link>
                </li>
                <li>
                    <Link to="testemonials-container" spy={true} smooth={true}>
                    Testemonials
                    </Link>
                </li>
                <li>
                    <Link to="contact-container" spy={true} smooth={true}>
                    Contact
                    </Link>
                </li>
            </div>
            <div className='TEMP'>
            <h2>!!This Website is under Construction!!</h2>

            </div>
        </section>
    )

};

export default Navbar;