import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import se03LiteImage from '../assets/rhyno_new.png'; // Adjust the path if needed
import se03Image from '../assets/new1111.png'; // Adjust the path if needed

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

const Product = ({ model }) => {
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

  // Define content based on model
  const content = {
    'SE03 Lite': {
      image: se03LiteImage,
      title: 'Rhyno SE03 Lite',
      description: 'Indulge in perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 1500W motor, it ensures a thrilling ride while still delivering an impressive 70-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 1500W motor and a 1.8kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!',
      specs: [
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
      ],
    },
    'SE03': {
      image: se03Image,
      title: 'Rhyno SE03',
      description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!',
      specs: [
        { label: 'Battery', value: '2.7Kwh' },
        { label: 'Battery Features', value: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)' },
        { label: 'Battery Warranty', value: '3 Years' },
        { label: 'Charging Time', value: '4 hours (12A)' },
        { label: 'Motor', value: '2000W' },
        { label: 'Max Speed', value: '55 km/h' },
        { label: 'Warranty on Electronics', value: '1 year' },
        { label: 'Max Range (@30km/h)', value: '150 km' },
        { label: 'Max Range (@45km/h)', value: '110 km' },
        { label: 'Max Range (@Full Speed)', value: '100 km' },
        { label: 'Other Key Benefits', value: 'Fire-safe battery, Range prediction, Comfortable ride, Stable and safe' },
      ],
    }
  };

  const { image, title, description, specs } = content[model] || content['SE03 Lite'];

  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage
          src={image}
          alt={title}
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
          {title}
        </Title>
        <Paragraph
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          {description}
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
    </ProductContainer>
  );
};

export default Product;

