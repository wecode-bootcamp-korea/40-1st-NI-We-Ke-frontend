import React, { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel';

const Dropdown = props => {
  const { carousel } = props;
  const slideSection = useRef(null);
  const [movecarousel, setMovecarousel] = useState(0);

  const moveLeft = () => {
    setMovecarousel(movecarousel + 1);
  };

  const moveRight = () => {
    setMovecarousel(movecarousel - 1);
  };
  const carouselLoop = carousel.map(carousel => {
    return (
      <Carousel
        key={carousel.sub_id}
        name={carousel.sub_name}
        img={carousel.img}
        text={carousel.text}
      />
    );
  });

  useEffect(() => {
    slideSection.current.style.transform = `translate( ${
      movecarousel * 400
    }px )`;
  }, [movecarousel]);

  return (
    <div className="dropDown">
      <div className="loopSection">
        <section className="carouselSection" ref={slideSection}>
          {carouselLoop}
        </section>
      </div>
      <button className="leftBtn" onClick={moveLeft}>
        왼쪽
      </button>
      <button className="rightBtn" onClick={moveRight}>
        오른쪽
      </button>
    </div>
  );
};

export default Dropdown;
