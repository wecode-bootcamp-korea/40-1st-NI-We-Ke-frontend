import React from 'react';
import Search from '../Search/Search';

const sideOption = () => {
  return (
    <section className="sideOption">
      <Search />
      <img src="/images/Nav/cardinal-point.png" alt="매장찾기" />
      <img src="/images/Nav/setIcon.png" alt="고객센터" />
      <img src="/images/Nav/heartIcon.png" alt="찜" />
      <img src="/images/Nav/shoppingIcon.png" alt="장바구니" />
      <img src="/images/Nav/userIcon.png" alt="내정보" />
    </section>
  );
};

export default sideOption;
