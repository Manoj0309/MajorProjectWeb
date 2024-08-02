import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #202020;
  padding: 2rem;
  color: #EDEDED;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h4>Policies</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Website Policy</li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Email: info@rhyno-ev.com</p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <p>Instagram | LinkedIn</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
