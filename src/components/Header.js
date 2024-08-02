import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/rhyno-logo.png'; // Adjust the path if your logo image is in a different location

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252525;
  padding: 1rem 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; // Space between logo and text
`;

const LogoImage = styled.img`
  height: 110px; // Adjust the height as needed
  width: auto; // Maintain aspect ratio
`;

const LogoText = styled.h1`
  color: #FFF225; // Yellow color
  font-weight: bold; // Bold text
  margin: 0; // Remove default margin
  font-size: 1.5rem; // Adjust font size as needed
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
  position: relative; // For dropdown positioning
`;

const MenuItem = styled(Link)`
  color: ${props => (props.active ? '#FFF225' : '#FFF225')};
  text-decoration: none;
  font-size: ${props => (props.active ? '1.2rem' : '1rem')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  transition: font-size 0.3s ease, color 0.3s ease;
`;

const DropdownMenu = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #252525;
  padding: 1rem;
  border-radius: 5px;
  top: 100%; // Position below the menu item
  left: 0;
  z-index: 10;
`;

const DropdownItem = styled(Link)`
  display: block;
  color: #FFF225;
  text-decoration: none;
  padding: 0.5rem 0;
  &:hover {
    background-color: #373737;
  }
`;

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={logo} alt="Rhyno Logo" />
        <LogoText>RHYNNO EV</LogoText>
      </LogoContainer>
      <Menu>
        <MenuItem to="/" active={location.pathname === '/'}>
          Home
        </MenuItem>
        <MenuItem
          to="#"
          onClick={() => setShowDropdown(prev => !prev)}
        >
          Products
        </MenuItem>
        <DropdownMenu ref={dropdownRef} show={showDropdown}>
          <DropdownItem to="/se03-lite" active={location.pathname === '/se03-lite'}>
            SE03 Lite
          </DropdownItem>
          <DropdownItem to="/se03" active={location.pathname === '/se03'}>
            SE03
          </DropdownItem>
          <DropdownItem to="/se03max" active={location.pathname === '/se03max'}>
            SE03 Max
          </DropdownItem>
          <DropdownItem to="/compare" active={location.pathname === '/compare'}>
            Compare All
          </DropdownItem>
        </DropdownMenu>
        <MenuItem to="/about" active={location.pathname === '/about'}>
          About Us
        </MenuItem>
        <MenuItem to="/contact" active={location.pathname === '/contact'}>
          Contact Us
        </MenuItem>
        <MenuItem to="/pre-book" active={location.pathname === '/pre-book'}>
          Pre-book Now
        </MenuItem>
        <MenuItem to="/rentals" active={location.pathname === '/rentals'}>
          Rentals
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;
