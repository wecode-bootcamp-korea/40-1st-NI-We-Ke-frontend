import React, { useEffect, useState, useRef } from 'react';

const Content = props => {
  const { id, img, title, text } = props;
  const [position, setPosition] = useState(0);
  const contentHeight = useRef();
  // const lastScrollTop = position;
  const onScroll = () => {
    setPosition(window.scrollY);
  };

  const scrollDown = () => {
    return position + window.innerHeight > window.innerHeight * id + 100 &&
      position + window.innerHeight < window.innerHeight * id + 300
      ? //
        window.scrollTo({
          top: window.innerHeight * id + 30,
          left: 0,
          // behavior: 'smooth',
        })
      : false;
  };
  const scrollUp = () => {
    return position === window.innerHeight * id - 100 &&
      position > window.innerHeight - 200
      ? window.scrollTo({
          top: window.innerHeight * (id - 1),
          left: 0,
          // behavior: 'smooth',
        })
      : false;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', scrollDown);
    window.addEventListener('scroll', scrollUp);

    // window.addEventListener('scroll', function () {
    //   if (lastScrollTop > position) {
    //     scrollDown();
    //   } else scrollUp();
    // });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', scrollDown);
      window.removeEventListener('scroll', scrollUp);
      // window.removeEventListener('scroll', function () {
      //   if (lastScrollTop > position) {
      //     scrollDown();
      //   } else scrollUp();
      // });
    };
  }, []);
  console.log(`현재 스크롤 top 값 : ${position}`);
  console.log(`현재 스크롤 bottom 값 : ${position + window.innerHeight}`);
  console.log(`${id}번째 content top 값 : ${window.innerHeight * id} `);
  console.log(
    `${id}번째 content bottom 값 : ${window.innerHeight * (id + 1)} `
  );

  return (
    <div className="content" ref={contentHeight}>
      <section className="imgBox">
        <img className="contentImg" src={img} alt="메인컨텐츠이미지" />
      </section>
      <section className="textBox">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
        <section className="btnBox">
          <button>자세히보기</button>
          <button>구매하기</button>
        </section>
      </section>
    </div>
  );
};

export default Content;
