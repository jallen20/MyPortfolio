import React from 'react';
import {NavBarWrapper, NavItem} from "./NavBar.styles";

const NavBar = () => {
    
    return (
        <NavBarWrapper>
            <NavItem activeClass="active"  to='home' spy={true} smooth={true}>Home</NavItem>
            <NavItem to='about' spy={true} smooth={true}>About</NavItem>
            <NavItem to='home' spy={true} smooth={true}>Projects</NavItem>
            <NavItem to='home' spy={true} smooth={true}>Contact</NavItem>
        </NavBarWrapper>
    )
}
export default NavBar;