import React, { useRef, useEffect } from 'react';
import Content from './Content/Content';
import './Main.scss';
import MAIN_DATA from './maindata';

const Main = () => {
  return (
    <div>
      <section className="scrollSection">
        {MAIN_DATA.map((data, i) => {
          return (
            <Content
              key={i}
              id={data.id}
              img={data.img}
              title={data.title}
              text={data.text}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Main;
