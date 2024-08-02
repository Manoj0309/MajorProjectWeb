import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

const FrontLineWrapper = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const FrontLine = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <FrontLineWrapper>
      Let’s Elevate Your Ride Experience With Rhyno – Where Superiority Meets <strong>{words[currentWord]}</strong>
    </FrontLineWrapper>
  );
};

export default FrontLine;
