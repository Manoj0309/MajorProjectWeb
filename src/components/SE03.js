// src/components/SE03.js

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SE03Container = styled.div`
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-top: 2rem;
`;

const SE03Title = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SE03Paragraph = styled(motion.p)`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const SE03SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  border-radius: 10px;
`;

const SE03TableHead = styled.thead`
  background-color: #252525;
  color: #FFF225;
`;

const SE03TableBody = styled.tbody`
  background-color: #f2f2f2;
`;

const SE03TableRow = styled(motion.tr)`
  &:nth-of-type(even) {
    background-color: #e0e0e0;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const SE03TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const SE03TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const SE03 = () => {
  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SE03Container>
      <SE03Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Rhyno SE03
      </SE03Title>
      <SE03Paragraph
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
      </SE03Paragraph>
      <SE03SpecTable>
        <SE03TableHead>
          <tr>
            <SE03TableHeaderCell>Specification</SE03TableHeaderCell>
            <SE03TableHeaderCell>Details</SE03TableHeaderCell>
          </tr>
        </SE03TableHead>
        <SE03TableBody>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <SE03TableCell>Battery</SE03TableCell>
            <SE03TableCell>2.7Kwh</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SE03TableCell>Battery features</SE03TableCell>
            <SE03TableCell>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SE03TableCell>Battery warranty</SE03TableCell>
            <SE03TableCell>3 Years</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SE03TableCell>Charging time</SE03TableCell>
            <SE03TableCell>4 hours (12A)</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SE03TableCell>Motor</SE03TableCell>
            <SE03TableCell>2000W</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SE03TableCell>Max speed</SE03TableCell>
            <SE03TableCell>55 km/h</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SE03TableCell>Warranty on electronics</SE03TableCell>
            <SE03TableCell>1 year</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <SE03TableCell>Max range (@30km/h)</SE03TableCell>
            <SE03TableCell>150 km</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SE03TableCell>Max range (@45km/h)</SE03TableCell>
            <SE03TableCell>110 km</SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <SE03TableCell>Max range (@full speed)</SE03TableCell>
            <SE03TableCell></SE03TableCell>
          </SE03TableRow>
          <SE03TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SE03TableCell>Other key benefits</SE03TableCell>
            <SE03TableCell>Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</SE03TableCell>
          </SE03TableRow>
        </SE03TableBody>
      </SE03SpecTable>
    </SE03Container>
  );
};

export default SE03;
