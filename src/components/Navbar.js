import React from 'react';
import {Link} from 'react-scroll';



const Navbar = ({isOpen, setIsOpen }) => {

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return(
            <div className="navigation">
                <li >
                    <Link onClick={handleClick} activeClass="active" to="about-section" spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="project-container" spy={true} smooth={true}>
                    Projects
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="testemonials-container" spy={true} smooth={true}>
                    Testemonials
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="contact-container" spy={true} smooth={true}>
                    Contact
                    </Link>
                </li>
            </div>
    )

};

export default Navbar;