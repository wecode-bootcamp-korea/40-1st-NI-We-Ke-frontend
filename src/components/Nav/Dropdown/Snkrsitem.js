import React, { useState } from 'react';
import './Snkrsitem.scss';

const Snkrsitem = props => {
  const { img, name, text } = props;
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const openHeight = () => {
    setHeight(180);
    setOpacity(1);
  };

  const closeHeight = () => {
    setHeight(0);
    setOpacity(0);
  };

  return (
    <div
      className="itemList"
      onMouseEnter={openHeight}
      onMouseLeave={closeHeight}
    >
      <div className="eventSection">
        <img src={img} alt="드로우 상품" />
        <section className="textSection" style={{ height: `${height}px` }}>
          <p style={{ opacity }} className="bold">
            {name}
          </p>
          <p style={{ opacity }}>{text}</p>
        </section>
      </div>
    </div>
  );
};

export default Snkrsitem;
