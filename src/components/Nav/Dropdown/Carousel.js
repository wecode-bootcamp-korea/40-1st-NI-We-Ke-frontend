import React from 'react';

const Carousel = props => {
  const { img, text, name } = props;

  return (
    <div className="carousel">
      <img className="carouselImg" src={img} alt="캐러셀 이미지" />
      <section className="carouselContent">
        <p className="carouselText">{text}</p>
        <p className="carouselTitle">{name}</p>
        <button>자세히보기</button>
      </section>
    </div>
  );
};

export default Carousel;
