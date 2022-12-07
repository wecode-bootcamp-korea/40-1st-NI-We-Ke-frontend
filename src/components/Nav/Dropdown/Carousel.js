import React from 'react';

const Carousel = props => {
  return (
    <div className="carousel" key={props.id}>
      <img className="carouselImg" src={props.img} alt="캐러셀 이미지" />
      <p className="carouselText">{props.text}</p>
      <p className="carouselTitle">{props.name}</p>
    </div>
  );
};

export default Carousel;
