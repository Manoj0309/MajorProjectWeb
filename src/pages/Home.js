import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import USPSection from '../components/USPSection';
import FrontLine from '../components/FrontLine';

const Main = styled.main`
  background-color: #FAFAFA;
  color: #131313;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #000000; /* Black color */
  margin-bottom: 1rem;
  animation: fadeIn 2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;
  color: #000000; /* Black color */
  margin-bottom: 2rem;
  animation: slideIn 1.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PreBookButton = styled.button`
  padding: 1rem 2rem;
  background-color: #FFF225;
  color: #252525;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  animation: pulse 1.5s infinite;

  &:hover {
    background-color: #F9ED32;
    transform: scale(1.05);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Home = () => {
  return (
    <>
      <Main>
        <HeroSection />
        <FrontLine />
        <Title>Welcome to RHYNO EV</Title>
        <Subtitle>Experience the Future of Electric Vehicles</Subtitle>
        <ProductSection />
        <USPSection />
        <PreBookButton>Pre-book Now</PreBookButton>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
