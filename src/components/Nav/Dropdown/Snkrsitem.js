import React from 'react';
import './Snkrsitem.scss';

const Snkrsitem = props => {
  const { img, name, text } = props;
  return (
    <div className="itemList">
      <img src={img} alt="드로우 상품" />
      <p>{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default Snkrsitem;
