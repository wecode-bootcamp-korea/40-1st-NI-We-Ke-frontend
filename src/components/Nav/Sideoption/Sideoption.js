import React from 'react';
import Search from './Search/Search';
import './Sideoption.scss';

const sideOption = () => {
  return (
    <section className="sideOption">
      <Search />
      <img
        className="sideIcon"
        src="/images/Nav/cardinal-point.png"
        alt="매장찾기"
      />
      <img className="sideIcon" src="/images/Nav/setIcon.png" alt="고객센터" />
      <img className="sideIcon" src="/images/Nav/heartIcon.png" alt="찜" />
      <img
        className="sideIcon"
        src="/images/Nav/shoppingIcon.png"
        alt="장바구니"
      />
      <img className="sideIcon" src="/images/Nav/userIcon.png" alt="내정보" />
    </section>
  );
};

export default sideOption;
