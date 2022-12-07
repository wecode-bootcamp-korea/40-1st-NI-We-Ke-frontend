import React from 'react';
import Carousel from './Carousel';

const Dropdown = props => {
  const carouselLoop = props.carousel.map(carousel => {
    return (
      <Carousel
        key={carousel.id}
        name={carousel.name}
        img={carousel.img}
        text={carousel.text}
      />
    );
  });
  console.log(props.carousel);
  return <div className="dropDown">{carouselLoop}</div>;
};

export default Dropdown;
