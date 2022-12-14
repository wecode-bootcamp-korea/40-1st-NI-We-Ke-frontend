import React from 'react';
import Content from './Content/Content';
import './Main.scss';
import MAIN_DATA from './maindata';

const Main = () => {
  return (
    <div>
      <section className="firstPage">여기는 진입페이지</section>
      {MAIN_DATA.map(data => {
        return (
          <Content
            key={data.id}
            img={data.img}
            title={data.title}
            text={data.text}
          />
        );
      })}
    </div>
  );
};

export default Main;
