import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactContainer = styled(motion.main)`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;

    a {
      color: #ff6600;
      text-decoration: none;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ff3300;
      }
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

const Contact = () => {
  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>Contact Us</motion.h1>
      <motion.p variants={itemVariants}>
        <strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a>
      </motion.p>
      <motion.p variants={itemVariants}>
        <strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a>
      </motion.p>
      <motion.p variants={itemVariants}>
        <strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU,
        Raisan, Gandhinagar, Gujarat, India.
      </motion.p>
    </ContactContainer>
  );
};

export default Contact;
