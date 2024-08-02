import React from 'react';
import styled from 'styled-components';

const ComparisonContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComparisonTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #252525;
`;

const ComparisonTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
  overflow: hidden;
`;

const TableCell = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CellTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #252525;
`;

const CellText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #424242;
`;

const Comparison = () => {
  return (
    <ComparisonContainer>
      <ComparisonTitle>Comparison of Rhyno Models</ComparisonTitle>
      <ComparisonTable>
        <TableCell>
          <CellTitle>Specification</CellTitle>
        </TableCell>
        <TableCell>
          <CellTitle>Rhyno SE03 Lite</CellTitle>
          <CellText>Battery: 1.8Kwh</CellText>
          <CellText>Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</CellText>
          <CellText>Battery Warranty: 3 years</CellText>
          <CellText>Charging Time: 3 hours (12A)</CellText>
          <CellText>Motor: 1500W</CellText>
          <CellText>Max Speed: 55 km/h</CellText>
          <CellText>Warranty on Electronics: 1 year</CellText>
          <CellText>Max Range (@30km/h): 100 km</CellText>
          <CellText>Max Range (@45km/h): 90 km</CellText>
          <CellText>Max Range (@Full Speed): 60 km</CellText>
          <CellText>Other Key Benefits: Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</CellText>
        </TableCell>
        <TableCell>
          <CellTitle>Rhyno SE03</CellTitle>
          <CellText>Battery: 2.7Kwh</CellText>
          <CellText>Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</CellText>
          <CellText>Battery Warranty: 3 years</CellText>
          <CellText>Charging Time: 4 hours (12A)</CellText>
          <CellText>Motor: 1500W</CellText>
          <CellText>Max Speed: 55 km/h</CellText>
          <CellText>Warranty on Electronics: 1 year</CellText>
          <CellText>Max Range (@30km/h): 150 km</CellText>
          <CellText>Max Range (@45km/h): 110 km</CellText>
          <CellText>Max Range (@Full Speed): 90 km</CellText>
          <CellText>Other Key Benefits: Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</CellText>
        </TableCell>
        <TableCell>
          <CellTitle>Rhyno SE03 Max</CellTitle>
          <CellText>Battery: 2.7Kwh</CellText>
          <CellText>Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</CellText>
          <CellText>Battery Warranty: 3 years</CellText>
          <CellText>Charging Time: 4 hours (12A)</CellText>
          <CellText>Motor: 2000W</CellText>
          <CellText>Max Speed: 65 km/h</CellText>
          <CellText>Warranty on Electronics: 1 year</CellText>
          <CellText>Max Range (@30km/h): 120 km</CellText>
          <CellText>Max Range (@45km/h): 100 km</CellText>
          <CellText>Max Range (@Full Speed): 80 km</CellText>
          <CellText>Other Key Benefits: Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</CellText>
        </TableCell>
      </ComparisonTable>
    </ComparisonContainer>
  );
};

export default Comparison;
