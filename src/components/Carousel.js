import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images using relative paths
import bike1 from '../assets/bike1.jpg';
import bike2 from '../assets/bike2.png';
import bike3 from '../assets/bike3.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true, // Enable fade transition
    cssEase: 'linear', // Linear transition for smoother effect
  };

  const images = [bike1, bike2, bike3];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Bike ${index + 1}`} style={{ width: '100%', height: 'auto', transition: 'opacity 1s ease-in-out' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
 