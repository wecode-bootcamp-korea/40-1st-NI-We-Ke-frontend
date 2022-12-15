import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.scss';

const Dropdown = props => {
  const { className, carousel } = props;
  const slideSection = useRef(null);
  const [movecarousel, setMovecarousel] = useState(0);

  const moveLeft = () => {
    if (movecarousel === 0) {
      setMovecarousel(0);
    } else setMovecarousel(movecarousel - 1);
  };

  const moveRight = () => {
    if (movecarousel > carousel.length - 2) {
      setMovecarousel(carousel.length - 1);
    } else setMovecarousel(movecarousel + 1);
  };

  useEffect(() => {
    slideSection.current.style.transform = `translate( -${
      movecarousel * 400
    }px )`;
    slideSection.current.style.transition = `0.3s`;
  }, [movecarousel]);

  return (
    <div className={className}>
      <div className="loopSection">
        <section className="carouselSection" ref={slideSection}>
          {carousel.map(carousel => {
            return (
              <div className="carousel" key={carousel.sub_id}>
                <div className="imgBox">
                  <img
                    className="carouselImg"
                    src={carousel.img}
                    alt="캐러셀 이미지"
                  />
                </div>

                <section className="carouselContent">
                  <p className="carouselText">{carousel.text}</p>
                  <p className="carouselTitle">{carousel.sub_name}</p>
                  <button className="detailBtn">자세히보기</button>
                </section>
              </div>
            );
          })}
        </section>
      </div>
      <button className="leftBtn" onClick={moveLeft}>
        <img src="./images/Nav/backBtn.png" alt="왼쪽버튼" />
      </button>
      <button className="rightBtn" onClick={moveRight}>
        <img src="./images/Nav/fowardBtn.png" alt="오른쪽버튼" />
      </button>
    </div>
  );
};

export default Dropdown;
