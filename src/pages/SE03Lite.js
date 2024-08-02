import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import se03LiteImage from '../assets/rhyno_new.png'; // Adjust the path if needed

const SE03LiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f2f2f2;
  min-height: 100vh; /* Ensure the container takes up full viewport height */
`;

const SE03LiteImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 1.5rem;
`;

const SE03LiteImage = styled(motion.img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const Title = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #252525;
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  overflow: hidden;
  border-radius: 10px;
`;

const TableHead = styled.thead`
  background-color: #252525;
  color: #FFF225;
`;

const TableBody = styled.tbody`
  background-color: #f2f2f2;
`;

const TableRow = styled(motion.tr)`
  &:nth-of-type(even) {
    background-color: #e0e0e0;
  }
  &:hover {
    background-color: #ddd;
  }
  cursor: pointer;
  transition: background-color 0.3s;
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const BuyButton = styled.button`
  padding: 1rem 2rem;
  background-color: #FFF225;
  color: #252525;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: #F9ED32;
    transform: scale(1.05);
  }
`;

const SE03Lite = () => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 200, friction: 12 },
  }));

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const specs = [
    { label: 'Battery', value: '1.8Kwh' },
    { label: 'Max Range (@30km/h)', value: '100 km' },
    { label: 'Motor', value: '1500W' },
    { label: 'Charging Time', value: '3 hours (12A)' },
    { label: 'Battery Warranty', value: '3 Years' },
    { label: 'Max Speed', value: '50 km/h' },
    { label: 'Max Range (@Full Speed)', value: '70 km' },
    { label: 'Max Range (@45km/h)', value: '90 km' },
    { label: 'Other Key Benefits', value: 'Fire-safe battery, Range prediction, Comfortable ride and safe' },
    { label: 'Battery Features', value: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)' },
  ];

  return (
    <SE03LiteContainer>
      <SE03LiteImageContainer>
        <SE03LiteImage
          src={se03LiteImage}
          alt="SE03 Lite"
          style={props}
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          whileHover={{ scale: 1.05 }}
        />
      </SE03LiteImageContainer>
      <Title
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Rhyno SE03 Lite
      </Title>
      <Description
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Indulge in perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 1500W motor, it ensures a thrilling ride while still delivering an impressive 70-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 1500W motor and a 1.8kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
      </Description>
      <BuyButton>Buy Now</BuyButton>
      <SpecTable>
        <TableHead>
          <tr>
            <TableHeaderCell>Specification</TableHeaderCell>
            <TableHeaderCell>Details</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {specs.map((spec, index) => (
            <TableRow
              key={index}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TableCell>{spec.label}</TableCell>
              <TableCell>{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </SpecTable>
    </SE03LiteContainer>
  );
};

export default SE03Lite;
