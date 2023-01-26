import React from 'react';
import {FaBars} from 'react-icons/fa'
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
            <NavMenu>
                <NavItem>
                    <NavLinks to = 'about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = 'inspiration'>Inspiration</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = 'discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = 'signup'>Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'> Sign In </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar