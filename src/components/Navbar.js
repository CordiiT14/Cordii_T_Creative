import React from 'react';
import styled from 'styled-components';

const Navbar = () => {

    const Navbar = styled.div`
        color: white;
    `

    const NavItems = styled.ul`
        list-style: none;
        display: flex;
    `

    return(
        <Navbar>
            <NavItems>
                <li>About</li>
                <li>Projects</li>
                <li>Testemonials</li>
                <li>Contact</li>
            </NavItems>
        </Navbar>
    )

};

export default Navbar;