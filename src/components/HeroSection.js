import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png'; // Adjusted path

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #252525;
  background-color: #fff225;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9ed32;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to RHYNNO EV
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience the Future of Electric Vehicles
      </HeroSubtitle>
      <HeroButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Learn More
      </HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
