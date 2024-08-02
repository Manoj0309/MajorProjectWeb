import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #FFF225;
`;

const SearchBar = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
`;

const FilterSelect = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
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
  position: relative;
  transition: background-color 0.3s;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  position: relative;

  &::after {
    content: ${(props) => (props.sortDirection === 'ascending' ? '↑' : props.sortDirection === 'descending' ? '↓' : '')};
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: #FFF225;
    font-size: 0.8rem;
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  background-color: #333;
  color: #FFF;
  padding: 0.5rem;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  white-space: nowrap;
`;

const DetailsRow = styled(motion.tr)`
  background-color: #fafafa;
  td {
    padding: 1rem;
  }
`;

const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #FFF225;
  color: #252525;
  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const CompareAll = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'label', direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const specs = [
    { label: 'Model', se03Lite: 'SE03 Lite', se03: 'SE03', se03Max: 'SE03 Max' },
    { label: 'Battery', se03Lite: '1.8Kwh', se03: '2.7Kwh', se03Max: '2.7Kwh' },
    { label: 'Max Range (@30km/h)', se03Lite: '100 km', se03: '150 km', se03Max: '150 km' },
    { label: 'Max Range (@45km/h)', se03Lite: '90 km', se03: '110 km', se03Max: '90 km' },
    { label: 'Max Range (@Full Speed)', se03Lite: '70 km', se03: '100 km', se03Max: '100 km' },
    { label: 'Motor', se03Lite: '1500W', se03: '2000W', se03Max: '2000W' },
    { label: 'Charging Time', se03Lite: '3 hours (12A)', se03: '4 hours (12A)', se03Max: '4 hours (12A)' },
    { label: 'Max Speed', se03Lite: '50 km/h', se03: '55 km/h', se03Max: '55 km/h' },
    { label: 'Warranty on Electronics', se03Lite: '-', se03: '1 year', se03Max: '1 year' },
    { label: 'Battery Warranty', se03Lite: '3 Years', se03: '3 Years', se03Max: '3 Years' },
    { label: 'Other Key Benefits', se03Lite: 'Fire-safe battery, Range prediction, Comfortable ride and safe', se03: 'Fire-safe battery, Range prediction, Comfortable ride, Stable and safe', se03Max: 'Fire-safe battery, Range prediction, Comfortable ride and safe' }
  ];

  const filteredSpecs = specs.filter(spec =>
    spec.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSpecs = [...filteredSpecs].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  const paginatedSpecs = sortedSpecs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <Title>Compare All Models</Title>
      <SearchBar
        type="text"
        placeholder="Search specifications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FilterSelect onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}>
        <option value="">All Features</option>
        <option value="Battery">Battery</option>
        <option value="Range">Range</option>
        <option value="Motor">Motor</option>
        <option value="Charging Time">Charging Time</option>
        <option value="Speed">Speed</option>
      </FilterSelect>
      <SpecTable>
        <TableHead>
          <tr>
            <TableHeaderCell
              onClick={() => handleSort('label')}
              sortDirection={sortConfig.key === 'label' ? sortConfig.direction : null}
            >
              Specification
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => handleSort('se03Lite')}
              sortDirection={sortConfig.key === 'se03Lite' ? sortConfig.direction : null}
            >
              SE03 Lite
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => handleSort('se03')}
              sortDirection={sortConfig.key === 'se03' ? sortConfig.direction : null}
            >
              SE03
            </TableHeaderCell>
            <TableHeaderCell
              onClick={() => handleSort('se03Max')}
              sortDirection={sortConfig.key === 'se03Max' ? sortConfig.direction : null}
            >
              SE03 Max
            </TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {paginatedSpecs.map((spec, index) => (
            <React.Fragment key={index}>
              <TableRow
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleRowClick(index)}
              >
                <TableCell>
                  {spec.label}
                  <Tooltip
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {`Details about ${spec.label}`}
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {spec.se03Lite}
                </TableCell>
                <TableCell>
                  {spec.se03}
                </TableCell>
                <TableCell>
                  {spec.se03Max}
                </TableCell>
              </TableRow>
              {expandedRow === index && (
                <DetailsRow
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TableCell colSpan="4">
                    <p>Additional details about {spec.label}</p>
                  </TableCell>
                </DetailsRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </SpecTable>
      <Pagination>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredSpecs.length / itemsPerPage)}
        >
          Next
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default CompareAll;
