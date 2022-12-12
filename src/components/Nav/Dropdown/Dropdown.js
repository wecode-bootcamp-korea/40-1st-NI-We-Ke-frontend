import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.scss';

const Dropdown = props => {
  const { className, carousel } = props;
  const slideSection = useRef(null);
  const [movecarousel, setMovecarousel] = useState(0);

  const moveLeft = () => {
    setMovecarousel(movecarousel + 1);
  };

  const moveRight = () => {
    setMovecarousel(movecarousel - 1);
  };

  useEffect(() => {
    slideSection.current.style.transform = `translate( ${
      movecarousel * 400
    }px )`;
  }, [movecarousel]);

  return (
    <div className={className}>
      <div className="loopSection">
        <section className="carouselSection" ref={slideSection}>
          {carousel.map(carousel => {
            return (
              <div className="carousel" key={carousel.sub_id}>
                <img
                  className="carouselImg"
                  src={carousel.img}
                  alt="캐러셀 이미지"
                />
                <section className="carouselContent">
                  <p className="carouselText">{carousel.text}</p>
                  <p className="carouselTitle">{carousel.sub_name}</p>
                  <button>자세히보기</button>
                </section>
              </div>
            );
          })}
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
