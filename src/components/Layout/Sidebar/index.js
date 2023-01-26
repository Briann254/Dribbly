import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="About" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="Inspiration" onClick={toggle}>
                Inspiration
            </SidebarLink>
            <SidebarLink to="Discover" onClick={toggle} >
                Discover
            </SidebarLink>
            <SidebarLink to="Sign Up" onClick={toggle}>
                 Sign Up
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;