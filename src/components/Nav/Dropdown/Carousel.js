import React from 'react';

const Carousel = props => {
  const { id, img, text, name } = props;
  return (
    <div className="carousel" key={id}>
      <img className="carouselImg" src={img} alt="캐러셀 이미지" />
      <p className="carouselText">{text}</p>
      <p className="carouselTitle">{name}</p>
    </div>
  );
};

export default Carousel;
