import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const uspItems = [
  {
    title: 'LFP Battery',
    content: 'Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features...',
  },
  {
    title: 'Wider tyres',
    content: 'Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres...',
  },
  {
    title: 'Range prediction',
    content: 'Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety...',
  },
  {
    title: 'Extraordinary Experience',
    content: 'Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style...',
  },
  {
    title: 'Rugged and simple Design',
    content: 'We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking...',
  }
];

const USPWrapper = styled.div`
  margin: 2rem 0;
`;

const USPItem = styled.div`
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  height: ${(props) => (props.active ? 'auto' : '0')};
  overflow: hidden;
`;

const USPSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % uspItems.length);
    }, 5000); // Change USP item every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <USPWrapper>
      {uspItems.map((item, index) => (
        <USPItem key={index} active={index === activeIndex}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </USPItem>
      ))}
    </USPWrapper>
  );
};

export default USPSection;
