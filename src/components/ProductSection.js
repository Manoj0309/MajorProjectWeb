import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`;

const ProductSection = ({ title, description, image }) => {
  return (
    <Section
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Section>
  );
};

export default ProductSection;
