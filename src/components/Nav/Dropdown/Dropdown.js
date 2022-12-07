import React from 'react';
import Carousel from './Carousel';

const Dropdown = props => {
  const { carousel } = props;
  const carouselLoop = carousel.map(carousel => {
    return (
      <Carousel
        key={carousel.id}
        name={carousel.name}
        img={carousel.img}
        text={carousel.text}
      />
    );
  });

  return (
    <div className="dropDown">
      <section className="carouselSection">{carouselLoop} </section>
    </div>
  );
};

export default Dropdown;
