import React from 'react';
import Content from './Content/Content';
import './Main.scss';
import MAIN_DATA from './maindata';

const Main = () => {
  return (
    <div>
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
