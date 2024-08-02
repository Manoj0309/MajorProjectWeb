import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Import fonts
import '@fontsource/lato'; // npm install @fontsource/lato
import '@fontsource/poppins'; // npm install @fontsource/poppins

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutContainer = styled(motion.main)`
  padding: 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Default font */
  background-color: #FAFAFA; /* Light background for contrast */
  color: #2C2A2A; /* Dark grey text for readability */

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-family: 'Lato', sans-serif; /* Heading font */
    color: #131313; /* Black for the heading */
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    font-family: 'Calibri', 'Arial', sans-serif; /* Fallback font stack for body */
    line-height: 1.5;
    text-align: left;
    animation: ${fadeIn} 1s ease-in-out;
    color: #3C3C3C; /* Dark grey for the body text */

    &:nth-child(even) {
      font-family: 'Poppins', sans-serif; /* Alternate paragraph font */
      background-color: #F2F2F2; /* Light grey background for alternate paragraphs */
      padding: 1rem;
      border-radius: 8px;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <AboutContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>About Us</motion.h1>
      <motion.p variants={itemVariants}>
        Established in 2019 by an automotive engineer with a vision for sustainable and robust
        mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
        of young individuals passionately driving innovation in the electric vehicle industry. We
        believe in engineering solutions that solve problems.
      </motion.p>
      <motion.p variants={itemVariants}>
        With our first product, we've taken a bold step to create something more than just a vehicle;
        it's a unique experience of elegance, comfort and style, addressing the pitfalls of
        conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
        ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
        operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
        appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
        era in sustainable and dependable electric transportation.
      </motion.p>
    </AboutContainer>
  );
};

export default About;
