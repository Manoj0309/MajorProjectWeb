import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const Main = styled.main`
  padding: 2rem;
  background-color: #FAFAFA;
  color: #131313;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  color: #FFF;
  background-color: #3C3C3C;
  &:hover {
    background-color: #252525;
  }
`;

const AndroidIcon = styled.i`
  margin-right: 0.5rem;
`;

const AppleIcon = styled.i`
  margin-right: 0.5rem;
`;

const Rentals = () => {
  return (
    <>
      <Main>
        <Title>Rentals</Title>
        <Paragraph>Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.</Paragraph>
        <Paragraph>Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</Paragraph>
        <Paragraph>Download our rental app:</Paragraph>
        <ButtonGroup>
          <Button href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <AndroidIcon className="fab fa-android" /> Android
          </Button>
          <Button href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <AppleIcon className="fab fa-apple" /> Apple
          </Button>
        </ButtonGroup>
      </Main>
      <Footer />
    </>
  );
};

export default Rentals;
