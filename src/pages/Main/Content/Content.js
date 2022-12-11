import React, { useEffect, useState, useRef } from 'react';

const Content = props => {
  const { id, img, title, text } = props;
  const [position, setPosition] = useState(0);
  const ref = useRef();

  const height = id * 100;

  const onScroll = () => {
    setPosition(window.scrollY);
  };
  console.log(position);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    // return window.removeEventListener('scroll', onScroll);
  }, [position]);
  return (
    <div className="content" ref={ref}>
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
