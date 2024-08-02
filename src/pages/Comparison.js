import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f2f2f2; /* Light background for contrast */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #252525;
  margin-bottom: 1.5rem;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow-x: auto; /* Scroll horizontally on small screens */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8); /* Transparent background */
  padding: 1rem;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
`;

const TableHeader = styled.div`
  background-color: #252525;
  color: #fff;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 5px;
`;

const TableCell = styled.div`
  background-color: #ffffff;
  color: #252525;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Comparison = () => {
  return (
    <Container>
      <Title>Comparison of Rhyno EV Models</Title>
      <TableContainer>
        <Table>
          <TableHeader>Specification</TableHeader>
          <TableHeader>Rhyno SE03 Lite</TableHeader>
          <TableHeader>Rhyno SE03</TableHeader>
          <TableHeader>Rhyno SE03 Max</TableHeader>

          {/* Battery */}
          <TableCell>Battery</TableCell>
          <TableCell>1.8Kwh</TableCell>
          <TableCell>2.7Kwh</TableCell>
          <TableCell>2.7Kwh</TableCell>

          {/* Battery features */}
          <TableCell>Battery features</TableCell>
          <TableCell>
            LFP with 1500 cycles<br />
            Active Balancing<br />
            Waterproof (IP67)
          </TableCell>
          <TableCell>
            LFP with 1500 cycles<br />
            Active Balancing<br />
            Waterproof (IP67)
          </TableCell>
          <TableCell>
            LFP with 1500 cycles<br />
            Active Balancing<br />
            Waterproof (IP67)
          </TableCell>

          {/* Battery warranty */}
          <TableCell>Battery warranty</TableCell>
          <TableCell>3 years</TableCell>
          <TableCell>3 years</TableCell>
          <TableCell>3 years</TableCell>

          {/* Charging time */}
          <TableCell>Charging time</TableCell>
          <TableCell>3 hours (12A)</TableCell>
          <TableCell>4 hours (12A)</TableCell>
          <TableCell>4 hours (12A)</TableCell>

          {/* Motor */}
          <TableCell>Motor</TableCell>
          <TableCell>1500W</TableCell>
          <TableCell>1500W</TableCell>
          <TableCell>2000W</TableCell>

          {/* Max speed */}
          <TableCell>Max speed</TableCell>
          <TableCell>55 km/h</TableCell>
          <TableCell>55 km/h</TableCell>
          <TableCell>65 km/h</TableCell>

          {/* Warranty on electronics */}
          <TableCell>Warranty on electronics</TableCell>
          <TableCell>1 year</TableCell>
          <TableCell>1 year</TableCell>
          <TableCell>1 year</TableCell>

          {/* Max range (@30km/h) */}
          <TableCell>Max range (@30km/h)</TableCell>
          <TableCell>100 km</TableCell>
          <TableCell>150 km</TableCell>
          <TableCell>120 km</TableCell>

          {/* Max range (@45km/h) */}
          <TableCell>Max range (@45km/h)</TableCell>
          <TableCell>90 km</TableCell>
          <TableCell>110 km</TableCell>
          <TableCell>100 km</TableCell>

          {/* Max range (@full speed) */}
          <TableCell>Max range (@full speed)</TableCell>
          <TableCell>60 km</TableCell>
          <TableCell>90 km</TableCell>
          <TableCell>80 km</TableCell>

          {/* Other key benefits */}
          <TableCell>Other key benefits</TableCell>
          <TableCell>
            Fire-safe Battery<br />
            Range prediction<br />
            Comfortable ride<br />
            Stable and safe
          </TableCell>
          <TableCell>
            Fire-safe battery<br />
            Range prediction<br />
            Comfortable ride<br />
            Stable and safe
          </TableCell>
          <TableCell>
            Fire-safe battery<br />
            Range prediction<br />
            Comfortable ride<br />
            Stable and safe
          </TableCell>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Comparison;
