import React, { useState, useEffect } from 'react';
import Snkrsitem from './Snkrsitem';
import './Snkrsdrop.scss';

const Snkrsdrop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/DrawData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="snkrsDrop">
      <section className="snkrsList">
        {data.map(item => {
          return (
            <Snkrsitem
              key={item.id}
              name={item.name}
              img={item.img}
              text={item.text}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Snkrsdrop;
