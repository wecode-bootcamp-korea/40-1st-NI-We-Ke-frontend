import React from 'react';

const Content = props => {
  const { img, title, text } = props;

  return (
    <div className="content">
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
