import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import se03MaxImage from '../assets/bike3.png'; // Adjust the path if needed

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProductImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
`;

const ProductImage = styled(motion.img)`
  height: 300px;
  width: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const ColorSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ColorButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${props => props.color};
  outline: ${props => (props.selected ? '2px solid #FFF225' : 'none')};
  box-shadow: ${props => (props.selected ? '0 0 10px rgba(255, 255, 255, 0.7)' : 'none')};
  transition: outline 0.3s, box-shadow 0.3s;
`;

const ProductDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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
  
  &:hover {
    background-color: #F9ED32;
    transform: scale(1.05);
  }
`;

const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  overflow: hidden; /* Ensure the table fits within its container */
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
`;

const Title = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled(motion.p)`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const SE03Mxx = () => {
  const [selectedColor, setSelectedColor] = useState('#FFF225'); // Default color

  const colors = ['#FFF225', '#424242', '#2C2A2A'];

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

  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage
          src={se03MaxImage}
          alt="Rhyno SE03 Max"
          style={props}
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          whileHover={{ scale: 1.05 }}
        />
      </ProductImageContainer>
      <ColorSelector>
        {colors.map(color => (
          <ColorButton
            key={color}
            color={color}
            selected={color === selectedColor}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ColorSelector>
      <ProductDetails>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Rhyno SE03 Max
        </Title>
        <Paragraph
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </Paragraph>
        <BuyButton>Buy Now</BuyButton>
      </ProductDetails>
      <SpecTable>
        <TableHead>
          <tr>
            <TableHeaderCell>Specification</TableHeaderCell>
            <TableHeaderCell>Details</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TableCell>Battery</TableCell>
            <TableCell>2.7Kwh</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TableCell>Battery Features</TableCell>
            <TableCell>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TableCell>Battery Warranty</TableCell>
            <TableCell>3 Years</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TableCell>Charging Time</TableCell>
            <TableCell>4 hours (12A)</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TableCell>Motor</TableCell>
            <TableCell>2000W</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TableCell>Max Speed</TableCell>
            <TableCell>55 km/h</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <TableCell>Warranty on Electronics</TableCell>
            <TableCell>1 year</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <TableCell>Max Range (@30km/h)</TableCell>
            <TableCell>150 km</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <TableCell>Max Range (@45km/h)</TableCell>
            <TableCell>110 km</TableCell>
          </TableRow>
          <TableRow
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <TableCell>Max Range (@full speed)</TableCell>
            <TableCell>90 km</TableCell>
          </TableRow>
        </TableBody>
      </SpecTable>
    </ProductContainer>
  );
};

export default SE03Mxx;
