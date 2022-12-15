import React, { useState } from 'react';
import './Snkrsitem.scss';

const Snkrsitem = props => {
  const { img, name, text } = props;
  const [isHoverContent, setIsHoverContent] = useState('');

  const openHeight = () => {
    setIsHoverContent('show');
  };

  const closeHeight = () => {
    setIsHoverContent('');
  };

  return (
    <div
      className="itemList"
      onMouseEnter={openHeight}
      onMouseLeave={closeHeight}
    >
      <div className="eventSection">
        <img src={img} alt="드로우 상품" />
        <section className={`textSection ${isHoverContent ? 'show' : ''}`}>
          <p className="bold">{name}</p>
          <p>{text}</p>
        </section>
      </div>
    </div>
  );
};

export default Snkrsitem;
