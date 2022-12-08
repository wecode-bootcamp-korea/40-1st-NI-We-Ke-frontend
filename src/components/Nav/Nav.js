import React from 'react';
import Category from './Category/Category';
import Sideoption from './Sideoption/Sideoption';
import CATEGORY_DATA from './categoryData';
import './Nav.scss';

const Nav = () => {
  // TODO:  상수데이터 => 서버데이터로 변경 예정

  return (
    <div className="navBar">
      <img className="logo" alt="이미지로고" />
      <section className="category">
        <ul className="navList">
          {CATEGORY_DATA.map(category => {
            return (
              <Category
                key={category.id}
                name={category.name}
                carousel={category.carousel}
              />
            );
          })}
        </ul>
      </section>
      <Sideoption />
    </div>
  );
};

export default Nav;
