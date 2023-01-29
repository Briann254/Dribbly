import React from 'react';
import {FaBars} from 'react-icons/fa'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

function Navbar({ toggle }) {
  return (
   <>
   <Nav>
        <NavbarContainer>
            <NavLogo to='/'> Dribbly </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon >              
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar